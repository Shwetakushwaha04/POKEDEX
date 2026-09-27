const getPokemonList = async (url) => {
  if (!url) {
    throw new Error("There is no more page in this direction.");
  }
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Could not get Pokémon list.");
  }

  const data = await response.json();

  data.results.forEach((pokemon) => {
    console.log(pokemon.name);
  });
  return {
    next: data.next,
    previous: data.previous,
  };
};

const getPokemon = async (nameOrId) => {
  if (!nameOrId) {
    throw new Error("Please provide a Pokémon name or ID.");
  }
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId.toLowerCase()}`,);
  
  const data = await response.json();
  
  console.log("Name:", data.name);
  console.log("Height:", data.height);
  console.log("Weight:", data.weight);
  console.log("Experience:", data.base_experience);
  console.log("-----------Abilities------------");
  
  data.abilities.forEach((ele, index) => {
    console.log(`${index + 1}. ${ele.ability.name}`);
  });
};
module.exports = {
  getPokemonList,
  getPokemon,
};
