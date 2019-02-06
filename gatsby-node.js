//const slug = require(`slug`);

const fs = require("fs");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const data = fs.readFileSync("./data/NA.json");
  const types = JSON.parse(data);
  makePages(createPage, types);
};

function makePages(createPage, types) {
  types.forEach(type => {
    console.log(type);
    createPage({
      path: `/${type.url}/`,
      component: require.resolve("./src/templates/type.js"),
      context: { type }
    });
  });
}
