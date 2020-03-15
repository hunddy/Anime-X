module.exports = {
    name: "animebucks",
    category: "economy",
    aliases: ["animebuck", "animebucks", "currency", "money"],
    description: "This command is used to show currency.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let user = message.mentions.members.first() || message.author;
               
        let animebucks = db.fetch(`animebucks_${message.author.id}`)
        let bank = await db.fetch(`bank{message.author.id}`)
        if (bank === null) bank = 0;
        let vip = db.fetch(`vip{message.author.id}`)
        if (vip === null) vip = "None"; 
        if(vip === true) vip = "VIP";
        let author = message.member.user.tag


        if (animebucks === null) animebucks = 0;
       
        let animebucksembed = new RichEmbed()
        .setTitle(`${user.username} Animebucks`)
        .addField('**You currently have a total of:**', '`'+animebucks+'` Animebucks.')
        .addField('**You also have a total of:**', '`'+bank+'` Animebucks in you bank account.')
        .addField('**Your Vip status is:**', vip)
        .setColor("RANDOM")
        message.channel.send(animebucksembed)
        
        }
}
