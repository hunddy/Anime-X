module.exports = {
    name: "deposit",
    category: "economy",
     aliases: ["deposit", "dep", "desposits"],
    description: "This command is used for depositing money.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        const ms = require("parse-ms");

        if(!message.content.startsWith('?'))return;  

  let user = message.author;

  let member = db.fetch(`animebucks_${message.author.id}`)
  let member2 = db.fetch(`bank_${message.author.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`animebucks_${message.author.id}`)
    let bank = await db.fetch(`bank_${message.author.id}`)

    let embedbank = new RichEmbed()
    .setColor('RANDOM')
    .setDescription(":Cross: You don't have any money to deposit")

    if(money === 0) return message.channel.send(embedbank)

    db.add(`bank_${message.author.id}`, money)
    db.subtract(`animebucks_${message.author.id}`, money)
    let embed5 = new RichEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark: You have deposited all your Animebucks into your bank`);
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new RichEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: Specify an amount to deposit`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new RichEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: You can't deposit negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new RichEmbed()
  .setColor("RANDOM")
  .setDescription(`:x: You don't have that much money`);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new RichEmbed()
  .setColor("RANDOM")
  .setDescription(`:white_check_mark: You have deposited ${args[0]} Animebucks into your bank`);

  message.channel.send(embed5)
  db.add(`bank_${message.author.id}`, args[0])
  db.subtract(`animebucks_${message.author.id}`, args[0])
  }
    }
}
