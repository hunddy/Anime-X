module.exports = {
    name: "animebucks",
    category: "economy",
    usage: "Animebucks",
    description: "This command is used to show currency.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let user = message.mentions.members.first() || message.author;
               
        let animebucks = db.fetch(`animebucks_${message.guild.id}_${message.author.id}`)
        let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
        if (bank === null) bank = 0;


        if (animebucks === null) animebucks = 0;
       
        let animebucksembed = new RichEmbed()
        .setTitle('AnimeBucks')
        .addField('**You currently have a total of:**', '`'+animebucks+'` Animebucks.')
        .addField('**And also have:**', '`'+bank+'` animebucks in you bank account.')
        .setColor("RANDOM")
        .setImage('https://media.tenor.com/images/f10a9aa018d882d3b62e316725e4ca98/tenor.gif')
        message.channel.send(animebucksembed)
        
        }
}
