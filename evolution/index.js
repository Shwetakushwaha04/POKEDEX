const { getEvolution } = require("./helper");

const evolutionCommandManager = async(arg) => {
    try{
        const [pokemonName] = arg;
        
        if( !pokemonName) {
            console.log("Please provide a pokemon name.");
            console.log("Example: evolution pikachu");
            return;
        }
        await getEvolution(pokemonName);
    } catch (error) {
        console.error("Error:", error.message);
    }
};
module.exports = evolutionCommandManager;