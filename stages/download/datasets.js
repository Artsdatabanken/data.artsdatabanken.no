const { http, log } = require('@artsdatabanken/lastejobb')
const { dataUrl, metadataFilename, getLocalDataFilePathForUrl } = require('../config')

lastNedFiler();

async function lastNedFiler() {
  await lesUrl("Natur_i_Norge/Natursystem");
  await lesUrl("Natur_i_Norge/Landskap");
//  await lesUrl("Biota");
  await lesUrl("Administrativ_grense/Territorialområde/Fastlands-Norge");
  await lesUrl("Naturvernområde");
  await lesUrl("Datakilde");
  await lesUrl("Truet_art_natur");
}

async function lesUrl(relUrl, file=metadataFilename) {
  const relativePath = relUrl ? relUrl + "/" : "";
  const url = dataUrl + relativePath + file;
  const filePath = getLocalDataFilePathForUrl(relUrl, file);
  await http.downloadJson(url, filePath);
  log.info("Wrote", filePath);
}
