module.exports = {
    name: "addanimebucks",
    category: "economy",
    description: "This command is used for adding money into user accounts.",
    run: async (client, message, args) => {
        const {Client, RichEmbed, Collection} = require('discord.js')
        const db = require('quick.db');
        
        // check if the command caller has permission to use the command
        if(message.author.id !== '306963871980191754') return message.reply("You are not a bot developer, nor a whitelisted user.")
        .then(msg => msg.delete(3600000));

        if(!message.content.startsWith('?'))return;  
      
        let user = message.mentions.members.first() || message.author;
      
          if (isNaN(args[1])) return;
          db.add(`animebucks_${message.author.id}`, args[1])
           db.add(`educations_${message.author.id}`, args[1])
          let bal = db.fetch(`animebucks_${message.author.id}`)
          
          let education = db.fetch(`education_${message.author.id}`)
      
          let moneyEmbed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`:white_check_mark: Added ${args[1]} Animebucks\n\nNew Balance: ${bal}`);
          message.channel.send(moneyEmbed)
          message.delete()
      
      
}
}
