module.exports = {
    name: "buy",
    category: "economy",
    description: "This command is used for buying shop items.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let user = message.author;
        let author = db.fetch(`animebucks_${message.guild.id}_${message.author.id}`)
        if(!message.content.startsWith('?'))return; 
        
        if (args[0] == 'moneycrate') {
         let moneycrate2 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:x: You need 1000 Animebucks to purchase a Moneycrate.`);

        if (author < 1000) return message.channel.send(moneycrate2)
       
        db.fetch(`moneycrate_${message.guild.id}_${user.id}`)
        db.add(`moneycrate_${message.guild.id}_${user.id}`, 1)

        let moneycrate3 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: Purchased Moneycrate! :briefcase: For 1000 Animebucks, to open the crate do ?open moneycrate`);

        db.subtract(`animebucks_${message.guild.id}_${user.id}`, 1000)
        message.channel.send(moneycrate3)
        } else if(args[0] == 'jordans') {
               let jordans2 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:x: You need 600 Animebucks to purchase some Fresh jordans`);

        if (author < 600) return message.channel.send(jordans2)
       
        db.fetch(`jordans_${message.guild.id}_${user.id}`)
        db.add(`jordans_${message.guild.id}_${user.id}`, 1)

        let jordans3 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: Purchased Fresh jordans <:jordans:679200006942490654> For 600 Animebucks`);

        db.subtract(`animebucks_${message.guild.id}_${user.id}`, 600)
        message.channel.send(jordans3)
        } else if(args[0] == 'vip') {
     let vip1 = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`:x: You need 3500 Animebucks to purchase VIP`);
        if (author < 3500) return message.channel.send(vip1)
        
    let vip2 = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`You already owned vip you can't purchase it again.`)
    if(db.fetch(`vip_${message.guild.id}_${user.id}`)) return message.channel.send(vip2)
        db.fetch(`vip_${message.guild.id}_${user.id}`);
        db.set(`vip_${message.guild.id}_${user.id}`, true)

        let vip3 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: Purchased VIP <:Crown:679163396750442535> For 3500 Animebucks`);

        db.subtract(`animebucks_${message.guild.id}_${user.id}`, 3500)
        message.channel.send(vip3)
        }
        
    }
}
