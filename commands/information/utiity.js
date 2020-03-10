module.exports = {
    name: "utilityhelp", 
    category: "information",
    description: "Command used to show utility information",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        let funhelpembed =  new RichEmbed()
        .setColor('RANDOM')
        .setDescription('**Below are a list of commands used for Utility. ?(Command), To turn the page do ?p<number>utility**')
        .addField(`**Invite**`, 'This command will get you a invite to our support server, and also our bot invite so you can invite our bot to your server.')
        .addField(`**Ping**`, 'This command will show your ping.')
        .addField(`**Serverinfo**`, 'This command will show you the server information.')
        .setFooter('Utility help page 1/1', message.author.displayAvatarURL)
        message.channel.send(funhelpembed)
        
        }
}
