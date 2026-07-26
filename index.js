const readLine = require("node:readline");
const{stdin, stdout} = require("node:process");
const commandManager = require("./command-maanager.js");
const terminal = readLine.createInterface({
    input:stdin,
    output:stdout,
    prompt:"pokedex> ",
});

console.log("starting pokedex......");

terminal.prompt();
terminal.on("line", async(input) =>{
    const commands= input.split(" ");
    await commandManager(commands, terminal);
    terminal.prompt();
})

terminal.on("close",()=>{
    console.log("thank you for using pokedex!!!!");
    process.exit();
});