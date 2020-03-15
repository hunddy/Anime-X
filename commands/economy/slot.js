module.exports = {
    name: "slot",
    category: "economy",
    description: "This command is used for a slot game.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
               
        const slotItems = ["<:Cherry:679163236477829122>", "<:Strawberry:679163190474440714>", "<:Watermelon:679162888732016650>", "<:Orange:679162956881199125>", "<:Grape:679162310362660864>", "<:Bigwin:679163822191149066>"] 
        if(!message.content.startsWith('?'))return;  

    let user = message.author;
    let moneydb = await db.fetch(`animebucks_${message.guild.id}_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;
    let bal = await db.fetch(`animebucks_${message.guild.id}_${user.id}`)

    let moneymore = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`:x: You are betting more than you have`);

    let moneyhelp = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`:x: Specify an amount`);

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 15
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 5
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new RichEmbed()
            .setTitle('<:Slots:679382050930819082>')
            .addField('Your old balance was', `${bal}`)
            .setDescription(`>${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}<\n\nYou won ${money} animebucks!`)
            .setColor("RANDOM")
        message.channel.send(slotsEmbed1)
        db.add(`animebucks_${message.guild.id}_${user.id}`, money)
    } else {
        let slotsEmbed = new RichEmbed()
            .setTitle('<:Slots:679382050930819082>')
            .addField('Your old balance was', `${bal}`)
            .setDescription(`>${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}<\n\nYou lost ${money} animebucks!`)
            .setColor("RANDOM")
        message.channel.send(slotsEmbed)
        db.subtract(`animebucks_${message.guild.id}_${user.id}`, money)
    }
    }
}
