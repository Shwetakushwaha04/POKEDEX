const { getPokemonList, getPokemon } = require("./helper");

const callingParams = {
  url: "https://pokeapi.co/api/v2/pokemon",
};

const pokemonCommandManager = async (arg) => {
  try {
    const [subCommand = "list", ...params] = arg;
    switch (subCommand) {
      case "-n": {
        const { next, previous } = await getPokemonList(callingParams.next);
        callingParams.next = next;
        callingParams.previous = previous;
        break;
      }
      case "-p": {
        const { next, previous } = await getPokemonList(callingParams.previous);
        callingParams.next = next;
        callingParams.previous = previous;
        break;
      }
      case "-s": {
        await getPokemon(params[0]);
        break;
      }
      case "list": {
        const { next, previous } = await getPokemonList(callingParams.url);
        callingParams.next = next;
        callingParams.previous = previous;
        break;
      }
      case "--help": {
        console.log("\nPokémon commands:");
        console.log("  pokemon list          Show the first page of Pokémon");
        console.log("  pokemon -n            Show the next page");
        console.log("  pokemon -p            Show the previous page");
        console.log("  pokemon -s <name|id>  Show a Pokémon's details\n");
        break;
      }

      default: {
        console.log(`Invalid Pokémon command "${subCommand}". Try "pokemon --help".`);
      }
    }
  } catch (error) {
    console.log("error getting ", error);
  }
};
module.exports = pokemonCommandManager;
