module.exports = {
    name: "education",
    category: "economy",
    description: "This command is used to show education progress.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
               
        let education = await db.fetch(`educations_${message.author.id}`)
       let graduation = await db.fetch(`highschooldiplomas_${message.author.id}`)
        if(graduation = null) graduation = "Not yet graduated";
        if(graduation = true) graduation = "High school diploma";

        if (education === null) education = 0
        let educationhours = new RichEmbed()
        .setTitle('Education/school minutes')
        .addField('**TIP**', 'Once, you have enough minutes of school you will be able to graduate and get a High school diploma. To graduate use the command ?graduate')
        .setDescription(`You have ${education} minutes of school. To go to school use the command "?school`)
        .addField('**Your graduation status is:**', graduation)
        message.channel.send(educationhours)
        
        }
}
