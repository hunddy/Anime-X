module.exports = {
    name: "eprofile",
    category: "economy",
    aliases: ["eprofile", "economyprofile", "inventory"],
    description: "This command is used for seeing other economy status.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');

        if(!message.content.startsWith('?'))return; 

        let user = message.author;
      
        let shoes = await db.fetch(`jordans_${message.author.id}`)
        if(shoes === null) shoes = '0'
        let moneycrate = await db.fetch(`moneycrate_${message.author.id}`)
        if(moneycrate === null) moneycrate = 'None'
      
        let moneyEmbed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`**${user}'s Profile**\n\n**Inventory**\n\nJordans: **${shoes}**\n\nMoneycrates: **${moneycrate}**`);
        message.channel.send(moneyEmbed)
      
    }
}
