const fs = require("fs");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  read("metadata_med_undertyper", createPage);
};

function read(fn, createPage) {
  const data = fs.readFileSync("./data/" + fn + ".json");
  let types = JSON.parse(data);
  if (types.data) types = types.data;
  if (types.tittel) types = { "~": types };
  makePages(createPage, types);
  const rotdata = types["~"];
  createPage({
    path: `/`,
    component: require.resolve("./src/templates/index.js"),
    context:{rotdata},
  });
}

function makePages(createPage, types) {
  Object.keys(types).forEach(kode => {
    const type = types[kode];
    if (type.url.length > 190) {
      console.log("2LONG", type.url);
      return;
    }
    var url = type.url; //.replace("Natur_i_Norge/Landskap", "LA");
    //url = url.replace("Natur_i_Norge/Natursystem", "NA");
    createPage({
      path: `/${url}/`,
      component: require.resolve("./src/templates/type.js"),
      context: { type }
    });
    
  });
}
