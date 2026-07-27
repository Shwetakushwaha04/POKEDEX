const getLocationList = async (url) => {
    if(!url){
        throw new Error("page does not exist");
    }
    const response = await fetch(url);
    const data = await response.json();
    
    data.results.forEach((location)=> {
        console.log(location.name);
    })
    return {
    next:data.next,
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

  const data = await response.json();

  console.log("Name:", data.name);
  console.log("Game Index:", data.game_index);
  console.log("Areas:");

  data.areas.forEach((area, index) => {
    console.log(`${index + 1}. ${area.name}`);
  });
};
module.exports = { getLocationList, getLocation };
