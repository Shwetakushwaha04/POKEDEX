const readLine = require("node:readline");
const{stdin, stdout} = require("node:process");
const commandManager = require("./command-maanager.js");
const terminal = readLine.createInterface({
    input:stdin,
    output:stdout,
    prompt:"pokedex> ",
});

console.log("\n========== Welcome to the Pokédex ==========");
console.log('Type "help" to see the available commands.');

terminal.prompt();
terminal.on("line", async(input) =>{
    const trimmedInput = input.trim();

    if (!trimmedInput) {
        terminal.prompt();
        return;
    }

    const shouldPrompt = await commandManager(trimmedInput.split(/\s+/), terminal);
    if (shouldPrompt) {
        terminal.prompt();
    }
})

terminal.on("close",()=>{
    console.log("Thank you for using the Pokédex!");
    process.exit();
});
