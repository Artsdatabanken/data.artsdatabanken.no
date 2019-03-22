const fs = require("fs");
const fetch = require("node-fetch");

const dataUrl = "https://data.artsdatabanken.no/";
const metadataFilename = "metadata_med_undertyper.json";

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  lesDatafil("Natur_i_Norge/Natursystem", createPage);
};

function lesDatafil(relUrl, createPage) {
  const dataFilePath = "./data/" + relUrl.replace("/", "_") + ".json";
  const url = dataUrl + relUrl + "/" + metadataFilename;
  if (fs.existsSync(dataFilePath)) return read(dataFilePath, createPage);
  fetch(url).then(response => {
    if (response.status !== 200) throw new Error(response);
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
    createPage({
      path: `/${type.url}/`,
      component: finnTemplate(type),
      context: { type }
    });
  });
}

function finnTemplate(type) {
  if (type.kode === "~") return require.resolve("./src/templates/index.js");
  return require.resolve("./src/templates/type.js");
}
