//const slug = require(`slug`);

//const axios = require("axios");
//const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);
//const getData = names => get(`/pokemon/${name}`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(
    `
      {
        allNaJson {
          edges {
            node {
              sti
              tittel {
                nb
              }
              ingress
              foto {
                forside {
                  url
                }
              }
              barn {
                kode
                tittel {
                  nb
                }
                farge
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    makePages(createPage, result.data.allNaJson);
  });
};

function makePages(createPage, data) {
  const types = data.edges;
  types.forEach(record => {
    const type = record.node;
    createPage({
      path: `/nin/${type.sti}/`,
      component: require.resolve("./src/templates/type.js"),
      context: { type }
    });
  });
}
