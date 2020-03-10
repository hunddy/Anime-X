module.exports = {
    name: "buyanimerich",
    category: "economy",
    description: "This command is used for buying.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        let author = db.fetch(`animebucks_${message.guild.id}_${message.author.id}`)
                // for finding from a guild
message.guild.roles.find(role => role.name === "AnimeRich");
// or for a member
message.member.roles.find(role => role.name === "AnimeRich");

// then i could do:

if (message.member.roles.find(role => role.name === "AnimeRich")) return message.reply("You already have that role, you cannot buy this item again.");

        if (!message.guild.roles.find("name", 'AnimeRich')) return message.channel.send('I could not find a role by the name of AnimeRich, check with the owners.')
        if (author < 10000) return message.channel.send(':rofl: You are too poor. You need atleast `10000$` to purchase the AnimeRich role.') // if the authors balance is less than 700$ return this, since the role costs 700$ in the store
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find("name", 'AnimeRich')) // get the role & add it

        db.subtract(`animebucks_${message.guild.id}_${message.author.id}`, 10000)
        message.channel.send(message.author.tag + ' You successfully bought the AnimeRich role for `10000$`')  
    }
}