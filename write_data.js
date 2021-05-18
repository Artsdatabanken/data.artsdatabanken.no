const fs = require("fs");
const path = require("path");
const {
  dataPath,
  metadataFilename,
  getLocalDataFilePathForUrl
} = require("./config");

let filindeks = {};
loadAll();

async function loadAll() {
  filindeks = await lesFilindeks();
  await lesUrl("Administrativ_grense/Territorialomr%C3%A5de/Fastlands-Norge");
  await lesDatafil("Natur_i_Norge/Natursystem");
  await lesDatafil("Natur_i_Norge/Landskap");
  await lesDatafil("Biota");
  await lesDatafil("Naturvernområde");
  await lesDatafil("Datakilde");

  //  await lesDatafil("Truet_art_natur");
}

async function lesFilindeks() {
  const filepath = dataPath + "index.json";
  return JSON.parse(fs.readFileSync(filepath));
}

async function lesDatafil(relUrl) {
  let filePath = getLocalDataFilePathForUrl(relUrl, metadataFilename);
  read(filePath);
}

function read(filePath) {
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
  makePages(r);
}

function makePages(types) {
  Object.keys(types).forEach(kode => {
    const type = types[kode];
    type.files = filindeks[type.url.substring(1)] || {};
    if (type.overordnet.length > 0) {
      const forelder = type.overordnet[0].kode;
      if (types[forelder]) {
        type.søsken = types[forelder].barn;
      }
    }
    const jsonPath = path.join("content", type.url + ".json");
    const dpath = path.dirname(jsonPath);
    fs.mkdirSync(dpath, { recursive: true });
    fs.writeFileSync(jsonPath, JSON.stringify(type));
  });
}
