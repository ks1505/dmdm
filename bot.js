const discordBotkit = require("botkit-discord");

const configuration = {
  token: process.env.DISCORD_TOKEN
};

const discordBot = discordBotkit(configuration);
var normalizedPath = require("path").join(__dirname, "skills");

require("fs")
  .readdirSync(normalizedPath)
  .forEach(function(file) {
    require("./skills/" + file)(discordBot);
  });

module.exports = discordBot;

const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";

client.on("message", message => {

if (message.content.startsWith(prefix + "dm")) {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` (**__MESSAGE__** *has been* **DM'ed** *to @everyone* | ✅ `); 
 message.delete(); 
};     
});


client.on('ready',()=>{
    console.log(' Bot is online now!');
    let statuses = [
        " MEST ",
        " my Owner ",
        " M-ESPORTS " // You can add any another Statuses
        
    ]
    setInterval(function(){
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            client.user.setActivity(status, {type:"LISTENING"})
    
        }, 3000) //Interval of Changing Statuses in Seconds



});

client.login("NzYxODE0NDUwNTk1NTYxNDcy.X3gE_g.7QzJT32gc5lXGcpyVPL1OWOfE4Q");
