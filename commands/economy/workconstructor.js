module.exports = {
    name: "workconstructor",
    category: "economy",
    description: "This command is used for working.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
               
        let amount = Math.floor(Math.random() * 200) + 1; // 1-500 random number. whatever you'd like
        let author = db.fetch(`education_${message.author.id}`)
        if (author < 300) return message.channel.send(':rofl: You are too stupid. You need atleast `5H` of education to work here. (To get education use the command "?School")')
        let constructorembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a constructor & got payed ${amount}$ for building trumps wall!`)
        .setColor("RANDOM")


        message.channel.send(constructorembed)
        db.add(`animebucks_${message.author.id}`, amount)
    }
}
