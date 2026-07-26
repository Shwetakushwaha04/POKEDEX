const getPokemonList = async (url) => {
    if(!url){
        throw new Error("page does not exist");
    }
    const response = await fetch(url);
    const data = await response.json();
    data.results.forEach((element)=>{
        console.log(element.name);
    });
    return{
        next: data.next,
        previous:data.previous,
    };
};

const getPokemon = async(nameOrId) =>{
    if(!nameOrId){
        throw new Error("Name or Id is required");
    }
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
    const data = await response.json();
    console.log("Name:",data.name);
    console.log("Height:", data.height);
    console.log("Weight:", data.weight);
    console.log("Experience:", data.base_experience);
    console.log("-----------Abilities------------");
    data.abilities.forEach((ele,index)=>{
        const ability =ele.ability;
        console.log(`${index+1}. ${ability.name}`);
    })
    console.log("-----------Abilities------------");
    
};
module.exports ={
    getPokemonList,
    getPokemon
};
