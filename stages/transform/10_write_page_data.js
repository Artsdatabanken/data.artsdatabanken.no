const fs = require("fs");
const path = require("path");
const { io } = require('@artsdatabanken/lastejobb')

//io.mkdirSync('temp/page_data')

let downloadable_files = {};
loadAll();

async function loadAll() {
  downloadable_files = await readDownloadableFiles();

  const datasets = io.findFiles("temp/datasets", ".json")
  // siden det er delt i mange filer nå - trenger vi å etablere søsken for toppnivå
  var søsken = getSøsken(datasets);

  datasets.forEach(dataset => read(dataset, søsken))
}

async function readDownloadableFiles() {
  return io.lesTempJson("downloadable_files_list.json");
}

function read(filePath, søsken) {
  let types = io.readJson(filePath);
  if (!types.items) throw new Error("Could not find any items array");
  types = types.items.items;
  types.forEach(type => {
    type.url = type.url;
    const topindex = (type.overordnet ? type.overordnet.length : 0) - 1;
    if (topindex >= 0) {
      const oo = type.overordnet;
      oo[topindex].url = oo[topindex].url;
      oo[topindex].tittel.nb = oo[topindex].tittel.nb;
    }
    if (type.overordnet.length == 0) {
      // sett inn søsken - naboene inklusiv seg selv fra de andre filene
      type.søsken = søsken;
    }
  });
  const r = {};
  if (process.env.TEST_RUN)
    types = [types[0]]
  types.forEach(e => (r[e.kode] = e));
  makePages(r);
}

function getSøsken(datasets) {
  const output = [];
  datasets.forEach(dataset => {
    let types = io.readJson(dataset);
    if (!types.items) throw new Error("Could not find any items array");
    types = types.items.items;
    if (!output.find(x => x.tittel.nb == types[0].tittel.nb)) {
      output.push(types[0]);
    }
  }
  )
  return output;
}

function makePages(types) {
  Object.keys(types).forEach(kode => {
    const type = types[kode];
    type.files = downloadable_files[type.url.substring(1)] || {};
    if (!type.overordnet || type.overordnet.length === 0) {
      type.overordnet = [{
        url: "/",
        tittel: { nb: "Hovedside" }
      }]
    }
    if (type.overordnet.length > 0) {
      const forelder = type.overordnet[0].kode;
      if (types[forelder]) {
        type.søsken = types[forelder].barn;
      }
    }
    const jsonPath = path.join("temp/page_data", type.url + ".json");
    const dpath = path.dirname(jsonPath);
    fs.mkdirSync(dpath, { recursive: true });
    fs.writeFileSync(jsonPath, JSON.stringify(type))
  });
}
