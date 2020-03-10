module.exports = {
    name: "dailybucks",
    category: "economy",
    description: "This command is used for gaining money.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        const ms = require('ms');
        let timeout = 86400000 // 24 hours in milliseconds, change if you'd like.
    let amount = 500
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let daily = db.fetch(`daily_${message.guild.id}_${message.author.id}`)

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`❌ **You already collected ur daily reward, you can come back and collect it in 24 HOURS**!`)
    } else {
    let embed = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`**Daily Reward**`)
    .addField('**Collected**', amount)

    message.channel.send(embed)
    db.add(`animebucks_${message.guild.id}_${message.author.id}`, amount)
    db.set(`daily_${message.guild.id}_${message.author.id}`, Date.now())

    }
}
}