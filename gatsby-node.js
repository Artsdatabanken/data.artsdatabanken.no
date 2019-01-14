//const slug = require(`slug`);

//const axios = require("axios");
//const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);
//const getData = names => get(`/pokemon/${name}`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(
    `
      {
        allNinJson {
          edges {
            node {
              kode
              navn
              bilde
              sti
            }
          }
        }
      }
    `
  ).then(result => {
    console.log(result);
    if (result.errors) {
      throw result.errors;
    }
    makePages(createPage, result.data.allNinJson);
  });
};

function makePages(createPage, data) {
  const types = data.edges;
  console.log(types);
  types.forEach(record => {
    const type = record.node;
    console.log(type);
    createPage({
      path: `/nin/${type.sti}/`,
      component: require.resolve("./src/templates/type.js"),
      context: { type }
    });
  });
}
