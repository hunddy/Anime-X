module.exports = {
    name: "dailybucks",
    category: "economy",
    aliases: ["daily", "dailybucks", "dailybuck"],
    description: "This command is used for gaining money.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')

        let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.
         const db = require('quick.db');
         let user = message.mentions.members.first() || message.author;
         let vip = db.fetch(`vip_${message.guild.id}_${user.id}`)
         if(vip === true) vip = 500 + 250;
         if (vip === null) vip = 500 + 0;


        const ms = require('parse-ms');
               

        if(!message.content.startsWith('?'))return;  
      
        let daily = await db.fetch(`beg_${message.guild.id}_${user.id}`);
      
        if (daily !== null && timeout - (Date.now() - daily) > 0) {
          let time = ms(timeout - (Date.now() - daily));
           let timeEmbed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`:x: You've already begged recently\n\nYou wil be ablle to claim you daiybucks in again in ${time.minutes}m ${time.seconds}s.>`);
          message.channel.send(timeEmbed)
    } else {
    let embed = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**Daily Reward**`)
    .addField('**Collected**', vip)

    message.channel.send(embed)
    db.add(`animebucks_${message.guild.id}_${message.author.id}`, vip)
    db.set(`daily_${message.guild.id}_${message.author.id}`, Date.now())

    }
}
}
