module.exports = {
    name: "economyhelp",
    category: "information",
    description: "Command used to show information",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        let economyhelpembed = new RichEmbed()
        .setColor('RANDOM')
        .setDescription('**Below are a list of commands used for economy. ?(Command), To turn the page do ?p<number>economyhelp**')
        .addField(`**Animebucks**`, 'This command will show you the amount of cash you have.')
        .addField(`**Beg**`, 'This command is used to beg people for money lol.')
        .addField(`**Dailybucks**`, 'This command will give you some daily cash. (Animebucks)')
        .addField(`**Deposit**`, 'This command will deposit money into your bank.')
        .addField(`**Eprofile**`, 'This command will show you your economy status Vip, Shoes, etc.')
        .addField(`**Education**`, 'This command will show you the hours of education you have. (Used to help get a job)')
        .setFooter('Economy help page 1/2', message.author.displayAvatarURL)
        message.channel.send(economyhelpembed)
        
        }
}
