const axios = require("axios");

const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);

const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`);
      const abilities = await Promise.all(
        pokemon.abilities.map(async ({ ability: { name: abilityName } }) => {
          const { data: ability } = await get(`/ability/${abilityName}`);

          return ability;
        })
      );

      return { ...pokemon, abilities };
    })
  );

exports.createPages = async ({ actions: { createPage } }) => {
  const allPokemon = await getPokemonData(["pikachu", "charizard", "squirtle"]);
  console.log(allPokemon);
  // Create a page that lists all Pokémon.
  const typer = [
    {
      kode: "NA_T",
      navn: "Fastmark",
      bilde: "https://artsdatabanken.no/Media/F1832?mode=320x320"
    },
    {
      kode: "NA_I",
      navn: "Is",
      bilde: "https://artsdatabanken.no/Media/F1832?mode=320x320"
    }
  ];

  createPage({
    path: `/nin/`,
    component: require.resolve("./src/templates/typer.js"),
    context: { typer }
  });
  /*  createPage({
    path: `/`,
    component: require.resolve("./src/templates/all-pokemon.js"),
    context: { allPokemon }
  });
*/
  // Create a page for each Pokémon.
  typer.forEach(type => {
    createPage({
      path: `/nin/${type.navn}/`,
      component: require.resolve("./src/templates/type.js"),
      context: { type }
    });
  });
};
