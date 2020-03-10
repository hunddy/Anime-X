module.exports = {
    name: "help",
    category: "information",
    description: "Command used to show help information",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
            let helpembed = new RichEmbed()
            .setColor('RANDOM')
            .setTitle('AnimeX help...')
            .setDescription('**These are listed of help commands you can use. Example ?Economyhelp, also for certin categorys theres pages.**')
            .addField(`:pushpin: **PREFIX:**`, '?')
            .addField(`:moneybag: **Economy**`, 'This command will show you a list of economy commmands! (__Anybody can use__)')
            .addField(`:zany_face: **Fun**`, 'This command will show you a list of fun commands! (__Anybody can use__)')
            .addField(`:tools: **Utility**`, 'This command will show you a list of utiity commands! (__Anybody can use__)')
            .addField(`:police_officer: **Moderation**`, 'This command will show you a list of mod commands! (__MODS ONLY__)')
            .setFooter('Help embed...', message.author.displayAvatarURL)
            message.channel.send(helpembed)
        
        }
}
