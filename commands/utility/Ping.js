module.exports = {
    name: "ping",
    category: "Fun",
    description: "A fun command to check your ping.",
    run: async (client, message, args) => {
            const startTIme = Date.now();
            message.channel.send (":ping_pong: Pong!")
            .then(cmd => {
                const endTime = Date.now();
                cmd.edit(`:ping_pong: Pong! \`[${endTime - startTIme}Ms]\``);
            });
        }
    
    

}