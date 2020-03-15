module.exports = {
    name: "workpolicemen",
    category: "economy",
    description: "This command is used for working.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
               
        let amount = Math.floor(Math.random() * 300) + 1;
        let author = db.fetch(`education_${message.author.id}`)
        if (author < 600) return message.channel.send(':rofl: You are too stupid. You need atleast `10H` of education to work here. (To get education use the command "?School")')
        let policemenembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, you worked as a policemen and got paid ${amount}$ for giving someone a ticket.`) 
        .setColor("RANDOM")
        message.channel.send(policemenembed) 
        db.add(`animebucks_${message.author.id}`, amount)
    }
}
