//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE
const http = require('http');
const express = require('express');
const app = express();
app.use(express.static('public'));
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);
//DESDE AQUI EMPIEZA A ESCRIBIR EL CODIGO PARA SU BOT
const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = process.env.PREFIX;
client.on('ready', () => {
  console.log('estoy listo!');
  client.user.setPresence({
       status: "online",
       game: {
           name: "+help | ⚡ |Bot Configurado Por NotThiago ",
           type: "PLAYING"
       }
   });
}); 
client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return; 
if (message.author.bot) return;
  if(message.content.startsWith(prefix + "help")) {
message.channel.send({embed: {
      color: 0xff0606,
  author: {
      },
      title: "**Thiago Bot**",
      fields: [{
          name: "🕵️‍| **__Comandos__**",
          value: "+ping  +say +avatar"
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "| Bot configurado por NotThiago |"    }
  }                     });   
    client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return; 
if (message.author.bot) return;
  if(message.content.startsWith(prefix + "say")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
    let texto = args.join(" ");
if(!texto) return message.channel.send(`Escriba un contenido pára decir.`);
message.channel.send(texto);                  
}
  }
);  }
});
client.login(process.env.TOKEN);

client.on('message', message => {

  if (message.content.startsWith("+ping")) {
   let ping = Math.floor(message.client.ping);
   message.channel.send(':ping_pong: `'+ping+' ms.` desde glitch.'); 

  }
  
});

client.on('message', message => {
    if (message.content === '+avatar') {
      // Remove the "var" line; it isn't necessary.
      let embed = new Discord.RichEmbed()
      // Replace "message.member" with "message.author"
    .setImage(message.author.avatarURL)
    .setColor('#275BF0')
      message.channel.send(embed)
    }
});
client.login('NTA5MzMyOTM2NzQ3NjQ2OTgz.DsMXmg.S0lnIDkGzkx2SARrM_jzz4bq2jo');
