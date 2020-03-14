module.exports = {
    name: "openmoneycrate",
    category: "economy",
    description: "This command is used for opening moneycrate.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let user = message.author;
        let author = db.fetch(`moneycrate_${message.guild.id}_${user.id}`)
        let amount = Math.floor(Math.random() * 2500) + 1; // 1-500 random number. whatever you'd like
        
        let Embed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:x: You don't have any moneycrates to open what you trying to do?`);
        if (author < 0) return message.channel.send(Embed)
    
        let moneycaseembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL) 
        .setDescription(`${message.author}, You opened a money crate and recive some cash ${amount}$:money_with_wings:`)
        .setColor("RANDOM")


        message.channel.send(moneycaseembed)
        db.subtract(`moneycrate_${message.guild.id}_${message.author.id}`, 1)
        db.add(`animebucks_${message.guild.id}_${message.author.id}`, amount)

    }
}
