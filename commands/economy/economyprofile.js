module.exports = {
    name: "eprofile",
    category: "economy",
    aliases: ["eprofile", "economyprofile", "inventory"],
    description: "This command is used for seeing other economy status.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');

        if(!message.content.startsWith('?'))return; 

        let user = message.mentions.members.first() || message.author;
      
        let shoes = await db.fetch(`jordans_${message.guild.id}_${user.id}`)
        if(shoes === null) shoes = '0'
      
        let moneyEmbed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`**${user}'s Profile**\n\nInventory\n\njordans: ${shoes}**`);
        message.channel.send(moneyEmbed)
      
    }
}
