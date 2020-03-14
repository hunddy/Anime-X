module.exports = {
    name: "robbery",
    category: "economy",
    aliases: ["sheist", "heist"],
    description: "This command is used for starting a robbery.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const Discord = require('discord.js');
         const db = require('quick.db');
         let user = message.mentions.members.first() || message.author;
         let vip = db.fetch(`vip_${message.guild.id}_${user.id}`)
         if(vip === true) vip = Math.floor(Math.random() * 600) + 100;
         if (vip === null) vip = Math.floor(Math.random() * 450) + 1;

         var bankrandom = [
            `You went in the bank and demanded money from the clerks as you the cops arrived early you ran into the bank and succefull escape with  __**${vip}**__ Animebucks.`,
            `You and your homies started a robbery at the bank and manage to escape with __**${vip}**__ Animebucks before the cops came.`,
            `You walked into the bank looking like a clown but once you went up to the clerk you demanded money the clerk gave you __**${vip}**__ Animebucks then you ran.`,
            `You ran into the bank screaming and demanding money from everyone as they handed you the money the cops came you manage to break the windows and escaped and manage to get __**${vip}**__ Animebucks.`
        ];
         var jewerlyrandom = [
            `You were looking in the dumpster at microsoft trying find stuff you can sell Bill Gates came out of no where and handed you __**${vip}**__ Animebucks`,
            `You walked into the apple store with the sign asking for money luckily Steven Paul was there he handed you __**${vip}**__ Animebucks`,
            `As Barack Obama was driving by he spotted you on the street holding a sign asking for money, he feels bad for you so he gives you __**${vip}**__ Animebucks`,
            `A random dude was selling jewlery he asked you if you wanted to buy some. But once he looked at you and your condition he gave you __**${vip}**__ Animebucks`
        ];

        let bankrandomm = (bankrandom[Math.floor(Math.random() *bankrandom.length)]);
        
        let jewerlyrandomm = (jewerlyrandom[Math.floor(Math.random() *jewerlyrandom.length)]);

        const ms = require('parse-ms');
               

        if(!message.content.startsWith('?'))return;  

        let timeout = 300000; 
      
        let heist = await db.fetch(`beg_${message.guild.id}_${user.id}`);
      
        if (heist !== null && timeout - (Date.now() - heist) > 0) {
          let time = ms(timeout - (Date.now() - heist));


        
          let timeEmbed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`:x: You've already started a heist recently\n\nStart one again in ${time.minutes}m ${time.seconds}s.`);
          message.channel.send(timeEmbed)
        }
        message.author.send("Wow, you really want to start a heist eh? Where do you wanna start one at? `Jewerly store?`, `Bank?`")
        const collector = new Discord.MessageCollecter(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        message.channel.send(collector)
        collector.on('collect', message => {
        if(message.content == "bank") {
        let bankEmbed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription("Here's a **Tip** if you own **VIP** you will get a extra __**100**__ Animebuck plus more chances to get more Animebucks from starting a heist.")
        .addField("**You have started a robbery at the bank!**", bankrandomm);
        message.channel.send(bankEmbed)
        db.add(`animebucks_${message.guild.id}_${user.id}`, vip)
        db.set(`heist_${message.guild.id}_${user.id}`, Date.now())
        } else if(message.content == "jewerly store") {
        let jewerlyEmbed = new RichEmbed()
        .setColor("RANDOM")
        .setDescription("Here's a **Tip** if you own **VIP** you will get a extra __**100**__ Animebuck plus more chances to get more Animebucks from starting a heist.")
        .addField("**You have started a robbery at the Jewerly store!**", jewerlyrandom);
        message.channel.send(bankEmbed)
        db.add(`animebucks_${message.guild.id}_${user.id}`, vip)
        db.set(`heist_${message.guild.id}_${user.id}`, Date.now())
        }
        })
            
      
      
        
    }
}
