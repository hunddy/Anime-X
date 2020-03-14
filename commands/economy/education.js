module.exports = {
    name: "education",
    category: "economy",
    description: "This command is used to show education progress.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
               
        let education = db.fetch(`education_${message.guild.id}_${message.author.id}`)

        if (education === null) education = 0
        message.channel.send('You have `'+education+'` minutes of school. (To go to school use the command "?school")')
        
        }
}
