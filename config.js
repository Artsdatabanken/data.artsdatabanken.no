const dataUrl = "https://data.artsdatabanken.no/";
const dataPath = "./data/";
const metadataFilename = "metadata_med_undertyper.json";

function getLocalDataFilePathForUrl(relUrl, filename) {
  const prefix = relUrl ? relUrl.replace(/\//g, "_") + "_" : "";
  return dataPath + prefix + filename;
}

module.exports = {
  dataPath,
  dataUrl,
  metadataFilename,
  getLocalDataFilePathForUrl
};
