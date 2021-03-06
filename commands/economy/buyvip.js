module.exports = {
    name: "buyvip",
    category: "economy",
    description: "This command is used for buying.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let user = message.author;
        let author = await db.fetch(`animebucks_${message.author.id}`)

        if(!message.content.startsWith('?'))return; 

        let Embed3 = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`You already owned vip you can't purchase it again.`)
    if(db.fetch(`vip_${message.author.id}`)) return message.channel.send(Embed3)
        
    let Embed = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`:x: You need 3500 Animebucks to purchase VIP`);
        if (author < 3500) return message.channel.send(Embed)
        

        
        await db.fetch(`vip_${message.author.id}`);
        db.set(`vip_${message.author.id}`, true)

        let Embed2 = new RichEmbed()
        .setColor("RANDOM")
        .setDescription(`:white_check_mark: Purchased VIP <:Crown:679163396750442535> For 3500 Animebucks`);

        db.subtract(`animebucks_${message.author.id}`, 3500)
        message.channel.send(Embed2)
    
    }
}
