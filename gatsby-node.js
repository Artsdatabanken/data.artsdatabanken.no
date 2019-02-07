const fs = require("fs");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  read("rot", createPage);
  read("NN", createPage);
  read("NA-LKM-S3-E", createPage);
  read("LA-KLG-AI", createPage);
  read("types", createPage);
};

function read(fn, createPage) {
  const data = fs.readFileSync("./data/" + fn + ".json");
  let types = JSON.parse(data);
  if (types.data) types = types.data;
  makePages(createPage, types);
}

function makePages(createPage, types) {
  Object.keys(types).forEach(kode => {
    const type = types[kode];
    //if (kode.startsWith("NN-LA-KLG"))
    if (type.url.length > 210) {
      console.log(type.url);
      return;
    }
    createPage({
      path: `/${type.url}/`,
      component: require.resolve("./src/templates/type.js"),
      context: { type }
    });
  });
}
