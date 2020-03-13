module.exports = {
    name: "animebucks",
    category: "economy",
    aliases: ["animebuck", "animebucks", "currency", "money"],
    description: "This command is used to show currency.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let user = message.mentions.members.first() || message.author;
               
        let animebucks = db.fetch(`animebucks_${message.guild.id}_${message.author.id}`)
        let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
        if (bank === null) bank = 0;
        let author = message.author


        if (animebucks === null) animebucks = 0;
       
        let animebucksembed = new RichEmbed()
        .setTitle(`${author} Animebucks`)
        .addField('**You currently have a total of:**', '`'+animebucks+'` Animebucks.')
        .addField('**You also have a total of:**', '`'+bank+'` Animebucks in you bank account.')
        .setColor("RANDOM")
        message.channel.send(animebucksembed)
        
        }
}
