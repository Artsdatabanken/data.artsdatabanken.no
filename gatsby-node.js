const fs = require("fs");
const fetch = require("node-fetch");

const dataUrl = "https://data.artsdatabanken.no/";
const dataPath = "./data/";
const metadataFilename = "metadata_med_undertyper.json";
const isDeveloping = process.env.NODE_ENV === "development";

exports.onPreBuild = () => {
  let promise = new Promise(function(resolve, reject) {
    lastNedFiler()
      .then(() => resolve())
      .catch(err => reject(err));
  });
};

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    loadAll(createPage);
    resolve();
  });
};

async function lastNedFiler() {
  await lesUrl("Natur_i_Norge/Natursystem");
  await lesUrl("Natur_i_Norge/Landskap");
  await lesUrl("Biota");
  await lesUrl("Fylke");
  await lesUrl("Naturvernområde");
  await lesUrl("Datakilde");
  await lesUrl("Truet_art_natur");
  await lesUrl("index.json");
}

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
  const filepath = dataPath + "index.json";
  return JSON.parse(fs.readFileSync(filepath));
}

async function lesDatafil(relUrl, createPage) {
  let filePath = dataFilePath(relUrl);
  read(filePath, createPage);
}

function dataFilePath(relUrl, file) {
  file = file || metadataFilename;
  return dataPath + relUrl.replace(/\//g, "_") + "_" + file;
}

async function lesUrl(relUrl) {
  if (!fs.existsSync(dataPath)) fs.mkdirSync(dataPath);
  const url = dataUrl + relUrl;
  const filePath = dataFilePath(relUrl) + metadataFilename;
  if (fs.existsSync(filePath)) return filePath;
  console.log("Downloading " + url);
  const response = await fetch(url);
  if (response.status !== 200) throw new Error(response.status + " " + url);
  const data = await response.text();
  fs.writeFileSync(filePath, data);
  console.log("Wrote", filePath);
  return filePath;
}

function read(filePath, createPage) {
  const data = fs.readFileSync(filePath);
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
    /*    if (type.kode === "~") {
      type.barn = type.barn.filter(x => x.url === "Natur_i_Norge");
    }
    if (type.kode === "NN")
      type.søsken = type.søsken.filter(x => x.url === "Natur_i_Norge");
*/
  });
  console.log(filePath, types.length);

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
      matchPath: type.url === "~" ? "/*" : `/${type.url}/*`,
      //matchPath: "/*",
      context: type
    });
  });
}
