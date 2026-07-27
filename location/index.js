const { getLocationList, getLocation } = require("./helper");

const callingParams = {
  url: "https://pokeapi.co/api/v2/location",
};

const locationCommandManager = async (arg) => {
  try {
    const [subCommand = "list", ...params] = arg;

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

      case "-s": {
        await getLocation(params[0]);
        break;
      }

      case "--help": {
        console.log("location list");
        console.log("location -n");
        console.log("location -p");
        console.log("location -s <name|id>");
        break;
      }

      default:
        console.log("Invalid location command");
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = locationCommandManager;
