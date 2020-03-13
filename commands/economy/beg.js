module.exports = {
    name: "beg",
    category: "economy",
    aliases: ["beg", "begs"],
    description: "This command is used for begging money POOR.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
         let amount = Math.floor(Math.random() * 200) + 1;
         var beggingrandom = [
            `You were looking in the dumpster at microsoft trying find stuff you can sell Bill Gates came out of no where and handed you **__${amount}**__ Animebucks`,
            `You walked into the apple store with the sign asking for money luckily Steven Paul was there he handed you **__${amount}**__ Animebucks`,
            `As Barack Obama was driving by he spotted you on the street holding a sign asking for money, he feels bad for you so he gives you __**${amount}**__ Animebucks`,
            `A random dude was selling jewlery he asked you if you wanted to buy some. But once he looked at you and your condition he gave you **__${amount}**__ Animebucks`
        ];
        let begrandomm = (beggingrandom[Math.floor(Math.random() *beggingrandom.length)]);
        const db = require('quick.db');
        const ms = require('parse-ms');
               

        if(!message.content.startsWith('?'))return;  

        let user = message.author;

        let timeout = 300000; 
      
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
        .addField("**Situation**", begrandomm);
        message.channel.send(moneyEmbed)
        db.add(`animebucks_${message.guild.id}_${user.id}`, amount)
        db.set(`beg_${message.guild.id}_${user.id}`, Date.now())
      
      
        }
    }
}
