module.exports = {
    name: "work",
    category: "economy",
    description: "This command is used for working.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let graduation = await db.fetch(`highschooldiplomas_${message.author.id}`);
        if(!message.content.startsWith('?'))return; 
        
        if (args[0] == 'programmer') {
        let programmeramount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like
        if (graduation === null) return message.channel.send(':rofl: You are too stupid. You need a high school diploma to work here. (To get education use the command "?School" then save up to graduate.)')
        let programmarembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a programmer for epicgames, you fixed their game & earned ${programmeramount}$!`)
        .setColor("RANDOM")


        message.channel.send(programmarembed)
        db.add(`animebucks_${message.author.id}`, programmeramount)
        } else if(args[0] == 'constructor') {
         let constructoramount = Math.floor(Math.random() * 200) + 1; // 1-500 random number. whatever you'd like
         if (graduation === null) return message.channel.send(':rofl: You are too stupid. You need a high school diploma to work here. (To get education use the command "?School" then save up to graduate.)')
        let constructorembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a constructor & got payed ${constructoramount}$ for building trumps wall!`)
        .setColor("RANDOM")


        message.channel.send(constructorembed)
        db.add(`animebucks_${message.author.id}`, constructoramount)
        } else if(args[0] == 'cooker') {
        let cookeramount = Math.floor(Math.random() * 50) + 1;
        if (graduation === null) return message.channel.send(':rofl: You are too stupid. You need a high school diploma to work here. (To get education use the command "?School" then save up to graduate.)')
        let cookerembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, you worked and cooked for bill gates and got paid ${cookeramount}$`)
        .setColor("RANDOM")
        message.channel.send(cookerembed)
        db.add(`animebucks_${message.author.id}`, cookeramount)
        } else if (args[0] == 'policemen') {
                   
        let policemenamount = Math.floor(Math.random() * 300) + 1;
        if (graduation === null) return message.channel.send(':rofl: You are too stupid. You need a high school diploma to work here. (To get education use the command "?School" then save up to graduate.)')
        let policemenembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, you worked as a policemen and got paid ${policemenamount}$ for giving someone a ticket.`) 
        .setColor("RANDOM")
        message.channel.send(policemenembed) 
        db.add(`animebucks_${message.author.id}`, policemenamount)
        }
        
    }
}
