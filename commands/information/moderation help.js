module.exports = {
    name: "moderationhelp", 
    category: "information",
    description: "Command used to show moderation information",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        // check if the command caller has permission to use the command

        let modhelpembed = new RichEmbed()
        .setColor('RANDOM')
        .setDescription('**Below are a list of commands used to help mods. ?(Command)**')
        .addField(`**Announcement**`, 'This command will @every(You know) and send your message.')
        .addField(`**Ban**`, 'This command will remove a player from the guild but they will not be able to rejoin.')
        .addField(`**Clear**`, 'This command will clear the chat.')
        .addField(`**Embed**`, 'This command is like announcement but it wont mention the whole server')
        .addField(`**Kick**`, 'This command will remove a player from the guild but they will be able to rejoin.')
        .addField(`**Mute**`, 'This command will mute a user.')
        .addField(`**Poll**`, 'This command will set a poll for you.')
        .addField(`**SoftBan**`, 'This command will remove a player from the guild and delete all their messages they send, they will also be able to rejoin.')
        .addField(`**Unmute**`, 'This command will unmute a user.')
        .addField(`**Userinfo**`, 'This command will get the information of a player in your guild.')
        .setFooter('Moderation help page 1/1', message.author.displayAvatarURL)
        message.channel.send(modhelpembed)
        }
}
