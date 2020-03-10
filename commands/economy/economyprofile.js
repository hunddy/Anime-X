module.exports = {
    name: "eprofile",
    category: "economy",
    description: "This command is used for seeing other economy status.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');

        if(!message.content.startsWith('?'))return; 

        let user = message.mentions.members.first() || message.author;
        
        let education = await db.fetch(`education_${message.guild.id}_${user.id}`)
        if (education === null) education = 0;

        let money = await db.fetch(`animebucks_${message.guild.id}_${user.id}`)
        if (money === null) money = 0;
      
       let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
       if (bank === null) bank = 0;

        let vip = await db.fetch(`vip_${message.guild.id}_${user.id}`)
          if(vip === null) vip = 'None'
          if(vip === true) vip = 'VIP'
      
        let shoes = await db.fetch(`jordans_${message.guild.id}_${user.id}`)
        if(shoes === null) shoes = '0'
      
        let moneyEmbed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`**${user}'s Profile**\n\n**Animebucks: ${money}\nBank: ${bank}\nEducation hours: ${education}\nVIP Rank: ${vip}\n\nInventory\n\njordans: ${shoes}**`);
        message.channel.send(moneyEmbed)
      
    }
}