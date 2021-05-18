const fs = require("fs");
const fetch = require("node-fetch");
const {
  dataPath,
  dataUrl,
  metadataFilename,
  getLocalDataFilePathForUrl
} = require("./config");

lastNedFiler();

async function lastNedFiler() {
  await lesUrl("Natur_i_Norge/Natursystem");
  await lesUrl("Natur_i_Norge/Landskap");
  await lesUrl("Biota");
  await lesUrl("Administrativ_grense/Territorialomr%C3%A5de/Fastlands-Norge");
  await lesUrl("Naturvernomr%C3%A5de");
  await lesUrl("Datakilde");
  await lesUrl("Truet_art_natur");
  await lesUrl("", "index.json");
}

async function lesUrl(relUrl, file) {
  if (!fs.existsSync(dataPath)) {
    console.log("Creating " + dataPath);
    fs.mkdirSync(dataPath);
  }
  if (!file) file = metadataFilename;
  const relativePath = relUrl ? relUrl + "/" : "";
  const url = dataUrl + relativePath + file;
  const filePath = getLocalDataFilePathForUrl(relUrl, file);
  if (fs.existsSync(filePath)) return filePath;
  console.log("Downloading " + url + " til " + filePath);
  const response = await fetch(url);
  if (response.status !== 200) throw new Error(response.status + " " + url);
  const data = await response.text();
  fs.writeFileSync(filePath, data);
  console.log("Wrote", filePath);
  return filePath;
}
