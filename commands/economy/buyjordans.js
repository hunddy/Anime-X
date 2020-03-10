module.exports = {
    name: "buyjordans",
    category: "economy",
    description: "This command is used for buying.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let user = message.author;
        let author = db.fetch(`animebucks_${message.guild.id}_${message.author.id}`)
        if(!message.content.startsWith('?'))return; 

        let Embed2 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:x: You need 600 Animebucks to purchase some Fresh jordans`);

        if (author < 600) return message.channel.send(Embed2)
       
        db.fetch(`jordans_${message.guild.id}_${user.id}`)
        db.add(`jordans_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: Purchased Fresh jordans <:jordans:679200006942490654> For 600 Animebucks`);

        db.subtract(`animebucks_${message.guild.id}_${user.id}`, 600)
        message.channel.send(Embed3)
    }
}