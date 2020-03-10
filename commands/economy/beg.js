module.exports = {
    name: "beg",
    category: "economy",
    description: "This command is used for begging money POOR.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        const ms = require('parse-ms');
               

        if(!message.content.startsWith('?'))return;  

        let user = message.author;

        let timeout = 180000;
        let amount = 50;
      
        let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);
      
        if (beg !== null && timeout - (Date.now() - beg) > 0) {
          let time = ms(timeout - (Date.now() - beg));
        
          let timeEmbed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`:x: You've already begged recently\n\nBeg again in ${time.minutes}m ${time.seconds}s stop begging and get a job. <:Chickenwithknife:679400414663409674>`);
          message.channel.send(timeEmbed)
        } else {
          let moneyEmbed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: You've begged bill gates and received ${amount} animebucks. Feels bad man`);
        message.channel.send(moneyEmbed)
        db.add(`animebucks_${message.guild.id}_${user.id}`, amount)
        db.set(`beg_${message.guild.id}_${user.id}`, Date.now())
      
      
        }
    }
}