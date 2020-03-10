module.exports = {
    name: "buyvip",
    category: "economy",
    description: "This command is used for buying.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let user = message.author;
        let author = db.fetch(`animebucks_${message.guild.id}_${message.author.id}`)
        if(!message.content.startsWith('?'))return; 

    let Embed = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`:x: You need 3500 Animebucks to purchase VIP`);
        if (author < 3500) return message.channel.send(Embed)
        
        db.fetch(`vip_${message.guild.id}_${user.id}`);
        db.set(`vip_${message.guild.id}_${user.id}`, true)

        let Embed2 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: Purchased VIP <:Crown:679163396750442535> For 3500 Animebucks`);

        db.subtract(`animebucks_${message.guild.id}_${user.id}`, 3500)
        message.channel.send(Embed2)
    
    }
}