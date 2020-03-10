module.exports = {
    name: "jobs",
    category: "economy",
    description: "This command is used for showing a list of jobs.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
               
        let jobembed = new RichEmbed()
        .setTitle("**Jobs that are opened!**")
        .setDescription('**To work at a place you like do ?work<Job> To turn the page do ?jobslist<Number>, Also note some jobs require school to use this command do "?school"**')
        .setColor("RANDOM")
        .addField(`**:man_cook: Cooker**`, 'Have you ever wanted to cook for famous people in the world? What if I told you it is possible with this job you can earn `1-300$`\nfor it!')
        .addField(`**:construction_worker: Constructor**`, 'Have you ever wanted to build cool structure? Then this job is for you get paid around `1-400$`\nto build cool stuff!')
        .addField(`**:police_officer: Policemen**`, 'Do you want to arrest people and give out tickets to earn money? If so then this job is for you! Get paid `300$`\nto do things you enjoy who does not wnat that?')
        .addField(`**:man_technologist: Programmer**`, 'Are you smart and know how to create code? Then this job is for you! Code for big companys and get paid a lot of money around `1-500$`\nfor it!')
        .setTimestamp()
        .setFooter('Jobs listing Page 1/2');

        message.channel.send(jobembed)
    }
}