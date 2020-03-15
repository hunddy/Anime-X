module.exports = {
    name: "withdraw",
    category: "economy",
    description: "This command is used for withdrawing money.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        const ms = require("parse-ms");

        if(!message.content.startsWith('?'))return;  

        let user = message.author;
      
        let member = db.fetch(`animebucks_${message.author.id}`)
        let member2 = db.fetch(`bank_${message.author.id}`)
      
        if (args[0] == 'all') {
          let money = await db.fetch(`bank_${message.author.id}`)
          
          db.subtract(`bank_${message.author.id}`, money)
          db.add(`animebucks_${message.author.id}`, money)
          let embed5 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: You have withdrawn all your Animebucks from your bank`);
        message.channel.send(embed5)
        
        } else {
      
        let embed2 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:x: Specify an amount to withdraw`);
        
        if (!args[0]) {
            return message.channel.send(embed2)
        }
        let embed3 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:x: You can't withdraw negative money`);
      
        if (message.content.includes('-')) { 
            return message.channel.send(embed3)
        }
        let embed4 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:x: You don't have that much money in the bank`);
      
        if (member2 < args[0]) {
            return message.channel.send(embed4)
        }
      
        let embed5 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: You have withdrawn ${args[0]} Animebucks from your bank`);
      
        message.channel.send(embed5)
        db.subtract(`bank_${message.author.id}`, args[0])
        db.add(`animebucks_${message.author.id}`, args[0])
        }
    }
}
