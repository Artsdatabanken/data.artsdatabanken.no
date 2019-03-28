/*
Script to move files into correct location on the web server being deployed to

node deploy-www.js metabase.json
*/
const fs = require("fs");
const base = "/home/grunnkart/tilesdata";

const text = fs.readFileSync(process.argv[2]);
const data = JSON.parse(text);
Object.keys(data).forEach(kode => {
  if (kode === "meta") return;
  const node = data[kode];
  if (node.url === "Katalog") node.url = "";
  const path = `${base}/${node.url}`;
  const fn = `${path}/index.html`;
  if (!fs.existsSync(path)) {
    console.log("mkdir: ", path);
  }
  const srcFile = "public/" + kode + ".html";
  if (!fs.existsSync(srcFile)) console.warn("Missing: " + srcFile);
  else fs.copyFileSync(srcFile, fn);
});
