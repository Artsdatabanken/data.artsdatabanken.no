const fs = require("fs");
const fetch = require("node-fetch");

const dataUrl = "https://data.artsdatabanken.no/";
const dataPath = "./data/";
const metadataFilename = "metadata_med_undertyper.json";
const isDeveloping = process.env.NODE_ENV === "development";

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    loadAll(createPage);
    resolve();
  });
};

async function loadAll(createPage) {
  const filindeks = await lesFilindeks();
  await lesDatafil("Natur_i_Norge/Natursystem", createPage);
  await lesDatafil("Natur_i_Norge/Landskap", createPage);
  await lesDatafil("Biota", createPage);
  await lesDatafil("Fylke", createPage);
  await lesDatafil("Naturvernområde", createPage);
  await lesDatafil("Datakilde", createPage);
  await lesDatafil("Truet_art_natur", createPage);
}

async function lesFilindeks() {
  const fn = await lesUrl("index.json");
  return JSON.parse(fs.readFileSync(fn));
}

async function lesDatafil(relUrl, createPage) {
  const url = relUrl + "/" + metadataFilename;
  const dataFilePath = await lesUrl(url);
  console.log("df", dataFilePath);
  read(dataFilePath, createPage);
}

async function lesUrl(relUrl) {
  if (!fs.existsSync(dataPath)) fs.mkdirSync(dataPath);
  const dataFilePath = dataPath + relUrl.replace(/\//g, "_");
  const url = dataUrl + relUrl;
  if (fs.existsSync(dataFilePath)) return dataFilePath;
  console.log("Downloading " + url);
  const response = await fetch(url);
  if (response.status !== 200) throw new Error(response.status + " " + url);
  const data = await response.text();
  fs.writeFileSync(dataFilePath, data);
  console.log("Wrote", dataFilePath);
  return dataFilePath;
}

function read(dataFilePath, createPage) {
  const data = fs.readFileSync(dataFilePath);
  let types = JSON.parse(data);
  if (types.data) types = types.data;
  Object.values(types).forEach(type => {
    type.url = type.url;
    type.tittel.nb = type.tittel.nb;
    const topindex = type.overordnet.length - 1;
    if (topindex >= 0) {
      const oo = type.overordnet;
      oo[topindex].url = oo[topindex].url;
      oo[topindex].tittel.nb = oo[topindex].tittel.nb;
    }
    if (type.kode === "~") {
      type.barn = type.barn.filter(x => x.url === "Natur_i_Norge");
    }
    if (type.kode === "NN")
      type.søsken = type.søsken.filter(x => x.url === "Natur_i_Norge");
  });
  makePages(createPage, types);
}

function makePages(createPage, types) {
  const component = require.resolve("./src/templates/type.js");

  Object.keys(types).forEach(kode => {
    const type = types[kode];
    if (isDeveloping && type.url.length > 92) return; // Filenames are too long
    createPage({
      path: isDeveloping ? `/${type.url}/` : `${type.kode}.html`,
      component: component,
      jsonName: type.kode + ".json",
      jsonPath: type.kode + ".json",
      matchPath: type.url === "~" ? "/*" : `/${type.url}/*`,
      context: type
    });
  });
}
