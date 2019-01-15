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
              infoUrl
              foto {
                forside {
                  url
                }
              }
              overordnet {
                kode
                tittel {
                  nb
                }
              }
              barn {
                kode
                tittel {
                  nb
                }
                farge
              }
              graf {
                relasjon
                kode
                tittel {
                  nb
                }
                farge
              }
              kartformat {
                type
                zoom
                format
              }
              stats {
                areal
                geometrier
                arealPrefix
                geometrierPrefix
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
  console.log(data);
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
