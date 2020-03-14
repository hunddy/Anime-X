module.exports = {
    name: "buymoneycrate",
    category: "economy",
    aliases: ["buy moneycrate", "buymoneycrate"],
    description: "This command is used for buying.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let user = message.author;
        let author = db.fetch(`animebucks_${message.guild.id}_${message.author.id}`)
        if(!message.content.startsWith('?'))return; 

        let Embed2 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:x: You need 1000 Animebucks to purchase some Fresh jordans`);

        if (author < 1000) return message.channel.send(Embed2)
       
        db.fetch(`moneycrate_${message.guild.id}_${user.id}`)
        db.add(`moneycrate_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: Purchased Moneycrate! :briefcase: For 1000 Animebucks, to open the crate do ?openmoneycrate`);

        db.subtract(`animebucks_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(Embed3)
    }
}
