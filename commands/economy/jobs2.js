module.exports = {
    name: "jobslist2",
    category: "economy",
    description: "This command is used for showing a list of jobs.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
               
        let jobembedp2 = new RichEmbed()
        .setTitle("**Jobs for this page is currently closed.**")
        .setDescription('**To work at a place you like do ?work <Job> To turn page do ?jobslist<Number>, Also note some jobs require school to use this command do "?school"**')
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter('Jobs Listing Page 2/2')
        message.channel.send(jobembedp2)
    }
}