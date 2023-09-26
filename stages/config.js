const dataUrl = "https://data.artsdatabanken.no/";
const metadataFilename = "metadata_med_undertyper.json";

function getLocalDataFilePathForUrl(relUrl, filename) {
  const prefix = "datasets/"+(relUrl ? relUrl.replace(/\//g, "_") + "_" : "");
  return prefix + filename;
}

module.exports = { dataUrl, metadataFilename, getLocalDataFilePathForUrl }