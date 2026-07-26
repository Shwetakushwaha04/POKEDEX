const pokemonCommandManager  = require("./pokemon");

async function commandManager(commands, terminal) {
  const [type, ...arg] = commands;
  switch (type) {
    case "pokemon": {
      await pokemonCommandManager(arg);
      break;
    }

    case "exit": {
      console.log("Closing the Pokédex. See you next time!");
      terminal.close();
      return false;
    }
    case "help": {
      console.log("\nAvailable commands:");
      console.log("  pokemon list          Show the first page of Pokémon");
      console.log("  pokemon -n            Show the next page");
      console.log("  pokemon -p            Show the previous page");
      console.log("  pokemon -s <name|id>  Look up a Pokémon");
      console.log("  pokemon --help        Show Pokémon command help");
      console.log("  exit                  Close the Pokédex\n");
      break;
    }

    default:
      console.log(`Command "${type}" was not found. Type "help" to see available commands.`);
  }

  return true;
}
module.exports = commandManager;
