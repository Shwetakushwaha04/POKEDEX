const pokemonCommandManager = require("./pokemon");
const locationCommandManager = require("./location");
const evolutionCommandManager = require("./evolution");

async function commandManager(commands, terminal) {
  const [type, ...args] = commands;

  switch (type) {
    case "pokemon":
      await pokemonCommandManager(args);
      break;

    case "location":
      await locationCommandManager(args);
      break;

    case "evolution":
      await evolutionCommandManager(args);
      break;

    case "help":
      console.log("\nAvailable commands:\n");

      console.log("POKEMON");
      console.log("  pokemon list             List Pokémon");
      console.log("  pokemon -n               Next page");
      console.log("  pokemon -p               Previous page");
      console.log("  pokemon -s <name|id>     Search Pokémon");

      console.log("\nLOCATION");
      console.log("  location list            List locations");
      console.log("  location -n              Next page");
      console.log("  location -p              Previous page");
      console.log("  location -s <name|id>    Search location");

      console.log("\nEVOLUTION");
      console.log("  evolution <name>         Show evolution chain");

      console.log("\nOTHER");
      console.log("  pokemon --help           Pokémon commands");
      console.log("  location --help          Location commands");
      console.log("  help                     Show this help");
      console.log("  exit                     Exit Pokédex\n");
      break;

    case "exit":
      terminal.close();
      return false;

    default:
      console.log(
        `Command "${type}" was not found. Type "help" to see available commands.`,
      );
  }

  return true;
}

module.exports = commandManager;
