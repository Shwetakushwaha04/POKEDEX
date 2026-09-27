const { getLocationList, getLocation } = require("./helper");

const callingParams = {
  url: "https://pokeapi.co/api/v2/location",
};

const locationCommandManager = async (args) => {
  try {
    const [subCommand = "list", ...params] = args;

    switch (subCommand) {
      case "list": {
        const { next, previous } = await getLocationList(callingParams.url);

        callingParams.next = next;
        callingParams.previous = previous;
        break;
      }

      case "-n": {
        const { next, previous } = await getLocationList(callingParams.next);

        callingParams.next = next;
        callingParams.previous = previous;
        break;
      }

      case "-p": {
        const { next, previous } = await getLocationList(
          callingParams.previous,
        );

        callingParams.next = next;
        callingParams.previous = previous;
        break;
      }

      case "-s":
        await getLocation(params[0]);
        break;

      case "--help":
        console.log("\nLocation commands:");
        console.log("  location list         Show the first page of locations");
        console.log("  location -n           Show the next page");
        console.log("  location -p           Show the previous page");
        console.log("  location -s <name|id> Show a location's details\n");
        break;

      default:
        console.log(
          `Invalid location command "${subCommand}". Try "location --help".`,
        );
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};

module.exports = locationCommandManager;
