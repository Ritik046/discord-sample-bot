// const {REST, Routes} = require("discord.js");
import { REST, Routes } from 'discord.js';

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
  ];
  const rest = new REST({ version: '10' }).setToken("MTE2NzM1NDk1NzA5NjI5MjM2Mg.GZbacm.IP1WCGwU8-FZmp7nHCNzlbMJlSk5__hFfLmItw");

  (async ()=>{

    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands("1167354957096292362"), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
  }) ();
