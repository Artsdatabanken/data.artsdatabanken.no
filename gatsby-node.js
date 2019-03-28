const fs = require("fs");
const fetch = require("node-fetch");

const dataUrl = "https://data.artsdatabanken.no/";
const dataPath = "./data/";
const metadataFilename = "metadata_med_undertyper.json";
const isDeveloping = process.env.NODE_ENV === "development";

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  lesDatafil("Natur_i_Norge/Natursystem", createPage);
  lesDatafil("Natur_i_Norge/Landskap", createPage);
  lesDatafil("Biota", createPage);
  lesDatafil("Fylke", createPage);
  lesDatafil("Naturvernområde", createPage);
};

function lesDatafil(relUrl, createPage) {
  if (!fs.existsSync(dataPath)) fs.mkdirSync(dataPath);
  const dataFilePath = dataPath + relUrl.replace("/", "_") + ".json";
  const url = dataUrl + relUrl + "/" + metadataFilename;
  if (fs.existsSync(dataFilePath)) return read(dataFilePath, createPage);
  console.log("Downloading " + url);
  fetch(url).then(response => {
    if (response.status !== 200) throw new Error(response.status + " " + url);
    response.text().then(data => {
      fs.writeFileSync(dataFilePath, data);
      read(dataFilePath, createPage);
    });
  });
}

function read(dataFilePath, createPage) {
  const data = fs.readFileSync(dataFilePath);
  let types = JSON.parse(data);
  if (types.data) types = types.data;
  if (types.tittel) types = { "~": types };
  makePages(createPage, types);
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
