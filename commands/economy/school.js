module.exports = {
    name: "school",
    category: "economy",
    description: "This command is used for education growth(amount of school hours.)",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        const ms = require('parse-ms');
               
        let amount = Math.floor(Math.random() * 30) + 1;

        let timeout = 180000 // 24 hours in milliseconds, change if you'd like.

    
    
        let schooldaily = db.fetch(`schooldaily_${message.guild.id}_${message.author.id}`)
      
        if (schooldaily !== null && timeout - (Date.now() - schooldaily) > 0) {
          let time = ms(timeout - (Date.now() - schooldaily));
            
          let timeEmbed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`:x: You've already went to school recently\n\nGo to school again in again in ${time.minutes}m ${time.seconds}s.`);
          message.channel.send(timeEmbed)
        } else {
        let schoolembed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
        .setDescription(`${message.author}, you went to the school and study for ${amount} minutes to help you towards your dream job.`) 
        .setColor("RANDOM")
        message.channel.send(schoolembed) 
        db.add(`education_${message.guild.id}_${message.author.id}`, amount)
        db.set(`schooldaily_${message.guild.id}_${message.author.id}`, Date.now())
        }
    }
}
