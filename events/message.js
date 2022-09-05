let { prefix } = require("../config.json");
const db = require("nrc.db");
const { MessageEmbed } = require("discord.js");

module.exports = async(message) => {
      let client = message.client;
        if (message.author.bot) return; 
        if (!message.guild) return message.reply("Komutlarım sadece sunucularda kullanılabilir.")
        if (!message.content.startsWith(prefix)) return; 
        const args = message.content.slice(prefix.length).trim().split(/ +/g); 
        const cmd = args.shift().toLowerCase(); 
        if (cmd.length === 0) return; 
        var command = client.commands.get(cmd); 
        if (!command) command = client.commands.get(client.aliases.get(cmd));
        if (command){
            command.calistir(client, message, args, prefix)
        }else return 
}