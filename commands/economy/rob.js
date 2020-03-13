module.exports = {
    name: "workinprogressrob1239123091230129312039",
    category: "economy",
    description: "This command is used for robbing people.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        const ms = require('parse-ms');
               

        if(!message.content.startsWith('?'))return;  

        let user = message.mentions.members.first()
        let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let targetuser = await db.fetch(`animebucks_${message.guild.id}_${user.id}`)
        let author = db.fetch(`animebucks_${message.guild.id}_${message.author.id}`)
        let author2 = await db.fetch(`animebucks_${message.guild.id}_${user.id}`)
        if (!target) return message.reply('please specify a user to rob!');
        
        let timeout = 600000;
        
        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));
        
            let timeEmbed = new RichEmbed()
            .setColor("RANDOM")
            .setDescription(`:x: You have already robbed someone\n\nTry again in ${time.minutes}m ${time.seconds}s `);
            message.channel.send(timeEmbed)
          } else {
        
        let moneyEmbed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`:x: You need atleast 500 Animebucks in your wallet to rob someone`);
        
        if (author < 500) {
            return message.channel.send(moneyEmbed)
        
        }
        let moneyEmbed2 = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`:x: ${user.user.username} does not have anything you can rob`);
        if (targetuser < 0) {
            return message.channel.send(moneyEmbed2)
        }

        let random = Math.floor(Math.random() * 300)
        
        let embed = new RichEmbed()
        .setDescription(`:white_check_mark: You robbed ${user} and got away with ${random} Animebucks`)
        .setColor("RANDOM")

        message.channel.send(embed)
        
        db.subtract(`animebucks_${message.guild.id}_${user.id}`, random)
        db.add(`animebucks_${message.guild.id}_${user.id}`, random)
        db.set(`rob_${message.guild.id}_${user.id}`, Date.now())
          
        };
    }
}
