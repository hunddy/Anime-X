module.exports = {
    name: "education",
    category: "economy",
    description: "This command is used to show education progress.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
               
        let education = await db.fetch(`educations_${message.author.id}`)

        if (education === null) education = 0
        let educationhours = new RichEmbed()
        .setTitle('Education/school minutes')
        .addField('**TIP**', 'Once, you have enough minutes of school you will be able to graduate and get a High school diploma.')
        .setDescription(`You have ${education} minutes of school. To go to school use the command "?school`)
        message.channel.send(educationhours)
        
        }
}
