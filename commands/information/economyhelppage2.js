module.exports = {
    name: "p2economyhelp",
    category: "information",
    description: "Command used to show information",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        let economyhelpembed = new RichEmbed()
        .setColor('RANDOM')
        .setDescription('**Below are a list of commands used for economy. ?(Command), To turn the page do ?p<number>economyhelp**')
        .addField(`**Jobs**`, 'This command will show you a list of jobs you can work at to get money.')
        .addField(`**Roulette**`, 'This command is what it sounds like bet money gain or lose.')
        .addField(`**School**`, 'This command will help you get a education to help you towards a job.')
        .addField(`**Shop**`, 'This command will show you a list of items you can buy.')
        .addField(`**Slot**`, 'This command is what it sounds like, earn money or lose it.')
        .addField(`**Withdraw**`, 'This command will withdraw money from your bank.')
        .setFooter('Economy help page 2/2', message.author.displayAvatarURL)
        message.channel.send(economyhelpembed)
        
        }
}
