const axios = require("axios");

const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);
const getData = names => get(`/pokemon/${name}`);

exports.createPages = async ({ actions: { createPage } }) => {
  const typer = [
    {
      kode: "NA_T",
      path: "Natursystem/Fastmark",
      navn: "Fastmark",
      bilde: "https://artsdatabanken.no/Media/F1832?mode=320x320"
    },
    {
      kode: "NA_I",
      path: "Natursystem/Snø- og issystemer",
      navn: "Is",
      bilde: "https://artsdatabanken.no/Media/F1832?mode=320x320"
    }
  ];

  createPage({
    path: `/nin/`,
    component: require.resolve("./src/templates/typer.js"),
    context: { typer }
  });

  typer.forEach(type => {
    createPage({
      path: `/nin/${type.path}/`,
      component: require.resolve("./src/templates/type.js"),
      context: { type }
    });
  });
};
