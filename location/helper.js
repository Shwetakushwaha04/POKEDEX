const getLocationList = async (url) => {
  if (!url) {
    throw new Error("There is no more page in this direction.");
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Could not get location list.");
  }

  const data = await response.json();

  data.results.forEach((location) => {
    console.log(location.name);
  });

  return {
    next: data.next,
    previous: data.previous,
  };
};

const getLocation = async (nameOrId) => {
  if (!nameOrId) {
    throw new Error("Location name or id required");
  }

  const response = await fetch(
    `https://pokeapi.co/api/v2/location/${nameOrId}`,
  );

  if(!response.ok){
    throw new Error(`Location "${nameOrId}" was not found`);
  }
  
  const data = await response.json();

  console.log("Name:", data.name);
  console.log("Game Index:", data.game_index);
  console.log("Areas:");

  data.areas.forEach((area, index) => {
    console.log(`${index + 1}. ${area.name}`);
  });
};
module.exports = { getLocationList, getLocation };
