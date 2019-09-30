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
  /*  await lesDatafil("Natur_i_Norge/Natursystem", createPage);
  await lesDatafil("Natur_i_Norge/Landskap", createPage);
  await lesDatafil("Biota", createPage);
  await lesDatafil("Naturvernområde", createPage);
  await lesDatafil("Datakilde", createPage);
*/
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
  if (!types.items) throw new Error("Could not find any items array");
  types = types.items;
  types.forEach(type => {
    type.url = type.url;
    const topindex = (type.overordnet ? type.overordnet.length : 0) - 1;
    if (topindex >= 0) {
      const oo = type.overordnet;
      oo[topindex].url = oo[topindex].url;
      oo[topindex].tittel.nb = oo[topindex].tittel.nb;
    }
  });
  const r = {};
  types.forEach(e => (r[e.kode] = e));
  makePages(createPage, r);
}

function makePages(createPage, types) {
  const component = require.resolve("./src/templates/type.js");

  Object.keys(types).forEach(kode => {
    const type = types[kode];
    type.files = filindeks[type.url] || {};
    if (type.overordnet.length > 0) {
      const forelder = type.overordnet[0].kode;
      console.log(kode, JSON.stringify(forelder));
      if (types[forelder]) {
        console.log(kode, JSON.stringify(types[forelder]));
        type.søsken = types[forelder].barn;
      }
    }
    const url = type.url;
    console.log(url);
    createPage({
      path: `${url}`,
      component: component,
      matchPath: url === "~" ? "/*" : `/${url}/*`,
      jsonName: `${url}/metadata.json`,
      context: type
    });
  });
}
