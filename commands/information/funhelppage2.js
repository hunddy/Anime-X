module.exports = {
    name: "p2funhelp", 
    category: "information",
    description: "Command used to show fun information",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        let funhelpembed =  new RichEmbed()
        .setColor('RANDOM')
        .setDescription('**Below are a list of commands used for fun. ?(Command), To turn the page do ?p<number>funhelp**')
        .addField(`**Rate**`, 'This command will rate the person you @!')
        .addField(`**Rmemes**`, 'This command will show memes. ;)')
        .addField(`**Rps**`, 'Play a classic game of rock paper scissors!')
        .addField(`**Rroastme**`, 'This command will show you a image from reddit that you can roast.')
        .addField(`**Snipe**`, 'This command will snipe a recent deleted message.')
        .addField(`**Urban**`, 'This command will show you the meaning of something and the example.')
        .addField(`**Yomama**`, 'This command will show you funny insults of "YO MAMA"')
        .setFooter('Fun help page 2/2', message.author.displayAvatarURL)
        message.channel.send(funhelpembed)
        
        }
}
