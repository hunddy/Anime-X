module.exports = {
    name: "buymoneycrate",
    category: "economy",
    description: "This command is used for buying.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let author = db.fetch(`animebucks_${message.guild.id}_${message.author.id}`)
        let amount = Math.floor(Math.random() * 5000) + 1; // 1-500 random number. whatever you'd like
        if (author < 2500) return message.channel.send(':rofl: You are too poor. You need atleast `2500$` to purchase the moneycrate.')
    
        let moneycaseembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, You opened a money crate that you bought from a nerd/weeb and recive some cash ${amount}$:money_with_wings:`)
        .setColor("RANDOM")


        message.channel.send(moneycaseembed)
        db.subtract(`animebucks_${message.guild.id}_${message.author.id}`, 2500)
        db.add(`animebucks_${message.guild.id}_${message.author.id}`, amount)
        message.channel.send(message.author.tag + ' You successfully purchase the Moneycrate from a nerd for `2500$')
    }
}