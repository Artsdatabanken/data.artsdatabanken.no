const fs = require("fs");
const {
  dataPath,
  metadataFilename,
  getLocalDataFilePathForUrl
} = require("./config");

const isDeveloping = process.env.NODE_ENV === "development";

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    loadAll(createPage);
    resolve();
  });
};

let filindeks = {};

async function loadAll(createPage) {
  filindeks = await lesFilindeks();
  await lesDatafil("Fylke", createPage);
  await lesDatafil("Natur_i_Norge/Natursystem", createPage);
  await lesDatafil("Natur_i_Norge/Landskap", createPage);
  await lesDatafil("Biota", createPage);
  await lesDatafil("Naturvernområde", createPage);
  await lesDatafil("Datakilde", createPage);
  //  await lesDatafil("Truet_art_natur", createPage);
  /**/
}

async function lesFilindeks() {
  const filepath = dataPath + "index.json";
  return JSON.parse(fs.readFileSync(filepath));
}

async function lesDatafil(relUrl, createPage) {
  let filePath = getLocalDataFilePathForUrl(relUrl, metadataFilename);
  read(filePath, createPage);
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

  makePages(createPage, types);
}

function makePages(createPage, types) {
  const component = require.resolve("./src/templates/type.js");

  Object.keys(types).forEach(kode => {
    const type = types[kode];
    type.files = filindeks[type.url] || {};
    const url = type.url;
    createPage({
      path: `/${url}`,
      component: component,
      matchPath: type.url === "~" ? "/*" : `/${url}/*`,
      jsonName: `/${url}/metadata.json`,
      context: type
    });
  });
}
