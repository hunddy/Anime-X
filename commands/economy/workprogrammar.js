module.exports = {
    name: "workprogrammar",
    category: "economy",
    description: "This command is used for working.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
               
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like
        let author = db.fetch(`education_${message.guild.id}_${message.author.id}`)
        if (author < 600) return message.channel.send(':rofl: You are too stupid. You need atleast `10H` of education to work here. (To get education use the command "?School")')
        let programmarembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, you worked as a programmer for epicgames, you fixed their game & earned ${amount}$!`)
        .setColor("RANDOM")


        message.channel.send(programmarembed)
        db.add(`animebucks_${message.guild.id}_${message.author.id}`, amount)
    }
}