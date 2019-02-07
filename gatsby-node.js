//const slug = require(`slug`);

const fs = require("fs");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  //const data = fs.readFileSync("./data/NA-LKM-S3-E.json");
  const data = fs.readFileSync("./data/metadata_med_undertyper.json");
  const types = JSON.parse(data);
  makePages(createPage, types.data);
};

function makePages(createPage, types) {
  Object.keys(types).forEach(kode => {
    const type = types[kode];
    //if (kode.startsWith("NN-LA-KLG"))
    console.log(type.url);
    createPage({
      path: `/${type.url}/`,
      component: require.resolve("./src/templates/type.js"),
      context: { type }
    });
  });
}
