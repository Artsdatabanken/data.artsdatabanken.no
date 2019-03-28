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
  await lesDatafil("Natur_i_Norge/Natursystem", createPage);
  await lesDatafil("Natur_i_Norge/Landskap", createPage);
  await lesDatafil("Biota", createPage);
  await lesDatafil("Fylke", createPage);
  await lesDatafil("Naturvernområde", createPage);
}

async function lesDatafil(relUrl, createPage) {
  if (!fs.existsSync(dataPath)) fs.mkdirSync(dataPath);
  const dataFilePath = dataPath + relUrl.replace("/", "_") + ".json";
  const url = dataUrl + relUrl + "/" + metadataFilename;
  if (fs.existsSync(dataFilePath)) return read(dataFilePath, createPage);
  console.log("Downloading " + url);
  const response = await fetch(url);
  if (response.status !== 200) throw new Error(response.status + " " + url);
  const data = await response.text();
  fs.writeFileSync(dataFilePath, data);
  read(dataFilePath, createPage);
}

function read(dataFilePath, createPage) {
  const data = fs.readFileSync(dataFilePath);
  let types = JSON.parse(data);
  if (types.data) types = types.data;
  Object.values(types).forEach(type => {
    type.url = hack(type.url);
    type.tittel.nb = hackNavn(type.tittel.nb);
    const topindex = type.overordnet.length - 1;
    if (topindex >= 0) {
      const oo = type.overordnet;
      oo[topindex].url = hack(oo[topindex].url);
      oo[topindex].tittel.nb = hackNavn(oo[topindex].tittel.nb);
    }
  });
  makePages(createPage, types);
}

function hack(url) {
  return url === "Katalog" ? "" : url;
}

function hackNavn(navn) {
  return navn === "Katalog" ? "Åpne data" : navn;
}

function makePages(createPage, types) {
  Object.keys(types).forEach(kode => {
    const type = types[kode];
    if (isDeveloping && type.url.length > 92) return; // Filenames are too long
    createPage({
      path: isDeveloping ? `/${type.url}/` : `/${type.kode}.html`,
      component: finnTemplate(type),
      context: type
    });
  });
}

function finnTemplate(type) {
  return require.resolve("./src/templates/type.js");
}
