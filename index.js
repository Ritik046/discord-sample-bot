// const {Client, GatewayIntenBits} = require("discord.js");
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent], });

client.on("messageCreate",(message)=>{
    if(message.author.bot) return;

    
  message.reply({
    content:"Hii From Bot",
  })
});

client.login(
    "MTE2NzM1NDk1NzA5NjI5MjM2Mg.GZbacm.IP1WCGwU8-FZmp7nHCNzlbMJlSk5__hFfLmItw"
);

client.on('interactionCreate',interaction=>{
    console.log(interaction);
    interaction.reply("Pong!");
})