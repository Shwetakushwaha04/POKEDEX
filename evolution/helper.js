const getEvolution = async (pokemonName) => {
    if(!pokemonName) {
        throw new Error('Pokemon name is required');
    }

    //get the pokemon species data
    const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName.toLowerCase()}`
    );
    if (!speciesResponse.ok) {
        throw new Error(`Pokemon ${pokemonName} not found`);
    }
    
    const speciesData = await speciesResponse.json();

    //get the evolution chain url
    const evolutionUrl = speciesData.evolution_chain.url;

    //get evolution chain 
    const evolutionResponse = await fetch(evolutionUrl);

    if(!evolutionResponse.ok) {
        throw new Error("could not get evolution information");
    }
    const evolutionData = await evolutionResponse.json();

    //extract evolution chain
    let current = evolutionData.chain;

    console.log("\nEvolution chain:");

    while(current){
        console.log(current.species.name);
        if(current.evolves_to.length === 0) {
            break;
        }
        current = current.evolves_to[0];
    }

};
module.exports = {
    getEvolution
};