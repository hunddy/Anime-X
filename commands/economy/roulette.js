module.exports = {
    name: "roulette",
    category: "economy",
    description: "This command is used for rouette .",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        const ms = require("parse-ms");

        if(!message.content.startsWith('?'))return;  

        let user = message.author;

  function isOdd(num) { 
    if ((num % 2) == 0) return false;
    else if ((num % 2) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
let moneydb = await db.fetch(`animebucks_${message.author.id}`)

let random = Math.floor(Math.random() * 30);

let moneyhelp = new RichEmbed()
.setColor("RANDOM")
.setDescription(`:x: Specify an amount to gamble | ?roulette <color> <amount>`);

let moneymore = new RichEmbed()
.setColor("RANDOM")
.setDescription(`:x: You are betting more than you have`);
let colorbad = new RichEmbed()
.setColor("RANDOM")
.setDescription(`:x: Specify a color | Red [2.5x] Black [3.5x] Green [17.5]`);
 let bal = await db.fetch(`animebucks_${message.author.id}`)


    if (!colour)  return message.channel.send(colorbad);
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(moneyhelp); 
    if (money > moneydb) return message.channel.send(moneymore);
    
    if (colour == "b" || colour.includes("black")) colour = 0;
    else if (colour == "r" || colour.includes("red")) colour = 1;
    else if (colour == "g" || colour.includes("green")) colour = 2;
    else return message.channel.send(colorbad);
    
    
    
    if (random == 0 && colour == 2) { // Green
        money *= 17.5
        db.add(`animebucks_${message.author.id}`, money)
        let currentwinbalancegreen = db.fetch(`animebucks_${message.author.id}`)
        let moneyEmbed1 = new RichEmbed()
        .setTitle(`${user.username} <:roulette:679401857122172928> Machine...`)
        .setColor("RANDOM")
        .setDescription(`:Green: You won ${money} Animebucks\n\nMultiplier: 17.5x\n\nYou now have **${currentwinbalancegreen}** Animebucks.`)
        message.channel.send(moneyEmbed1)
        console.log(`${message.author.tag} Won ${money} on green`)
    } else if (isOdd(random) && colour == 1) { // Red
        money = parseInt(money * 2.5)
        db.add(`animebucks_${message.author.id}`, money)
        let currentwinbalancered = db.fetch(`animebucks_${message.author.id}`)
        let moneyEmbed2 = new RichEmbed()
        .setTitle(`${user.username} <:roulette:679401857122172928> Machine...`)
        .setColor("RANDOM")
        .setDescription(`:Red: You won ${money} Animebucks\n\nMultiplier: 2.5x\n\nYou now have **${currentwinbalancered}** Animebucks.`)
        message.channel.send(moneyEmbed2)
    } else if (!isOdd(random) && colour == 0) { // Black
        money = parseInt(money * 3.5)
        db.add(`animebucks_$message.author.id}`, money)
        let currentwinbalanceblack = db.fetch(`animebucks_${message.author.id}`)
        let moneyEmbed3 = new RichEmbed()
        .setTitle(`${user.username} <:roulette:679401857122172928> Machine...`)
        .setColor("RANDOM")
        .setDescription(`:Black: You won ${money} Animebucks\n\nMultiplier: 3.5x\n\nYou now have **${currentwinbalanceblack}** Animebucks.`)
        message.channel.send(moneyEmbed3)
    } else { // Wrong
        db.subtract(`animebucks_${message.author.id}`, money)
        let currentwinbalancelose = db.fetch(`animebucks_${message.author.id}`)
        let moneyEmbed4 = new RichEmbed()
        .setTitle(`${user.username} <:roulette:679401857122172928> Machine...`)
        .setColor("RANDOM")
        .setDescription(`:x: You lost ${money} Animebucks\n\nMultiplier: 0x\n\nYou now have **${currentwinbalancelose}** Animebucks.`)
        message.channel.send(moneyEmbed4)
    }
    }
}
