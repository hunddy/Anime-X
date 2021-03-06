const db = require('quick.db'); // We need to require quick.db in every file it's used in.

module.exports = {
    name: "message",
    category: "Fun",
    description: "Fun command to level up",
    run: async (client, message, args, func) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        
        db.fetch(message.author.id + message.guild.id).then(i => { // This is the object of messages sent
            db.fetch(`userLevel_${message.author.id + message.guild.id}`).then(o => { // This is the object of their level
                message.channel.send('Messages sent: `' + (i.value + 1) + '`\nLevel: `' + o.value + '`'); // This returns their messages and level, the reason we used +1 for the messages is because
                // when someone calls this command, it also adds 1 earlier at the same, but since this is fetching the previous value, we need to add 1 to the answer, even thought it will be updated
                // seconds after this.
            }) 
        })
        }
}
