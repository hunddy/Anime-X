module.exports = {
    name: "shop",
    category: "economy",
    description: "This command is used for showing the shop.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let storeembed = new RichEmbed()
        .setTitle("**Anime shop!**")
        .setDescription('**To buy a item do ?buy<item>, To turn the page do ?shoplist<Number>(look at bottom if there are any extra pages)**')
        .setColor("RANDOM")
        .addField(`:princess: **Animekeeper**`, '`700$`\nGives you a custom AnimeKeeper role to show off that you are the keeper of anime.')
        .addField(`:gem: **AnimeRich**`, '`10000$`\nGives you a custom AnimeRich role to show off to the poor people that they can not afford the role.')
        .addField(`<:jordans:679200006942490654> **Jordans**`, '`600$`\nGives you a fresh pair of jordans that will give you a cool effect in the future leaderboard. :wink:')
        .addField(`:briefcase: :money_with_wings:**Money crate**`, '`2500$`\nGives you a money crate that opens into a random amout of cash the luck is the key. :wink:!')
        .addField(`<:Crown:679163396750442535> **Vip**`, '`3500$`\nGives you vip you will get more money while robbing people more coming soon! (You will not gain any other features if you buy it more then once)')
        .setTimestamp()
        .setFooter('Shop items Page 1/1 NOTE ALL ITEMS SOLD AND SHIP BY A NERD/WEEB NO REFUNDS.')
        message.channel.send(storeembed)  
    }
}