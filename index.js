const {
    attachment
} = require('discord.js');
const Discord = require('discord.js');
const bot = new Discord.Client();
const ms = require('ms');
const { config } = require("dotenv");
const token = 'NjA2OTQxNzA0MjA0ODQ1MDg4.XWcnaQ.pBfDn2fhdYLlyCYeHRkA1yhsR0Q';
const {Client, RichEmbed, Collection} = require('discord.js')
const configeration = require('./config.json')
const Config = require("dotenv")
const randomPuppy = require('random-puppy');
const snekfetch = require('snekfetch');
const yomama = require('yo-mamma');
const math = require('mathjs');
const urban = require("urban");
const stripIndents = require("common-tags");
require('dotenv/config');
const http = require('http');
const port = process.env.PORT || 3000;
bot.snipes = new Map();
http.createServer().listen(port);
const leveling = require('discord-leveling')



let PREFIX = configeration.prefix
var version = '1.0.7';


var Cooldown = '**5 Seconds**';
var Examplesmute = '**?Mute @Mat_thew 10S**';
var Examplesclear = '**?Clear 10**';
var Examples8ball = "**?8ball Will this server grow?**";

var HTUMute = '**?Mute @[USER ID] [TIME]S/M/H]**';
var coinflipdis = '**------------**'
var HTUClear = '**?Clear [NUMBER]**';
varHTU8ball = '**?8ball [QUESTION]**';

const { GiveawayManager } = require('discord-giveaways')

const db = require('quick.db');

const moment = require("moment");

const cheerio = require('cheerio');

const request = require('request');

const usedCommandRecently = new Set();

const fs = require('fs');

bot.commands = new Collection();
bot.aliases = new Collection();

function emoji (id) {
    return bot.emojis.get(id).toString();
}
["command"].forEach(handler =>{
    require(`./handlers/${handler}`)(bot);
});


var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Ask again later"
];

var CoinFlip = [
    "Heads",
    "Tails"
];


bot.on('ready', () =>{
    console.log(`${bot.user.username} is succefully on! in ${bot.guilds.size} Servers and in ${bot.channels.size} channels.`)
    bot.user.setActivity(`${bot.guilds.size} Servers, ?Help`, { type: 'WATCHING'}).catch(console.error);

})

bot.on('error', err => {
    console.log(err);
})
//Logging
bot.on("messageUpdate", async(oldMessage, newMessage) =>{
    if(oldMessage.content === newMessage.content){
        return;
    }
        let logembed = new RichEmbed()
        .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
        .setThumbnail(oldMessage.author.avatarURL)
        .setColor("RANDOM")
        .setDescription("Message edited")
        .addField("Before", oldMessage.content, true)
        .addField("After", newMessage.content, true)
        .setTimestamp()
        .setFooter('Edited message logged.');

        let loggingchannel = newMessage.guild.channels.find(ch => ch.name === "logs")
        if(!loggingchannel) return;

        loggingchannel.send(logembed);

    
})

let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    bot.channels.get("527661621968109570").send(x.join(" "));
})

bot.on("messageDelete", async message =>{

        let logdeleteembed = new RichEmbed()
        .setTitle("Message deleted!")
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL)
        .addField("Deleted by", message.author.tag)
        .addField("Deleted in", message.channel)
        .addField("Deleted at", message.createdAt)
        .setFooter('Deleted message logged.');

        let loggingdeletedchannel = message.guild.channels.find(ch => ch.name === "logs")
        if(!loggingdeletedchannel) return;

        loggingdeletedchannel.send(logdeleteembed);

    
});

bot.on('guildMemberAdd', member =>{
   
    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;

    channel.send(`Welcome, to the server ${member}! Make sure to read the rules!`);

});

bot.on('messageDelete', async message => {
   bot.snipes.set(message.channel.id, {
       sender: message.author,
       content: message.content
   });
});

bot.on("guildCreate", guild => {
    let channelID;
    let channels = guild.channels;
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
        
        }
    }
    let channel = bot.channels.get(guild.systemChannelID || channelID);
    let botonjoinserverembed = new RichEmbed()
    .setColor('RANDOM')
    .setTitle('Thank, you for adding me to the server!')
    .setDescription("Hello! I'm AnimeX here at your service my prefix is ``?`` I've a bunch of commands from laughing at memes to having fun playing with my economy system all the way to helping moderators moderate the chat!")
    .addField('**Important**', "I've a logging system, all you need to do is create a channel named ``logs`` this is optional.")
    .addField('**Also**', 'I hope you enjoy my functional commands if you need help or support make sure to join my support server!')
    .addField('**Need assistance or help with AnimeX? Join our support server!**', '[Join our support server!](https://discord.gg/R5JXU5h)')

    channel.send(botonjoinserverembed)
})
bot.on('message', async message=>{
    
    console.log(`${message.author.username} said: ${message.content}`);
    const PREFIX = configeration.prefix
    
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(PREFIX)) return;
    

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
      //When someone sends a message add xp
  var profile = await leveling.Fetch(message.author.id)
  leveling.AddXp(message.author.id, 10)
  //If user xp higher than 100 add level
  if (profile.xp + 10 > 100) {
    await leveling.AddLevel(message.author.id, 1)
    await leveling.SetXp(message.author.id, 0)
    let targetlevel = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    let levelembed = new RichEmbed()
    .setTitle('LEVEL UP!')
    .setThumbnail(targetlevel.user.avatarURL)
    .addField('**You just leveled up! You are now level:**', `**${profile.level + 1}**`)
    .setImage('https://media1.tenor.com/images/26acf59cb43097db3efc5b183cfd8c55/tenor.gif?itemid=15114457')
    .setColor("RANDOM")
    .setFooter('Leveled user information', message.author.displayAvatarURL);
    message.channel.send(levelembed)
  }
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = bot.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(bot, message, args);

});


bot.login(token);
