module.exports = {
    name: "workcooker",
    category: "economy",
    description: "This command is used for working.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
               
        let amount = Math.floor(Math.random() * 50) + 1;
        let author = db.fetch(`education_${message.guild.id}_${message.author.id}`)
        if (author < 300) return message.channel.send(':rofl: You are too stupid. You need atleast `5H` of education to work here. (To get education use the command "?School")')
        let cookerembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, you worked and cooked for bill gates and got paid ${amount}$`)
        .setColor("RANDOM")
        message.channel.send(cookerembed)
        db.add(`animebucks_${message.guild.id}_${message.author.id}`, amount)
    }
}