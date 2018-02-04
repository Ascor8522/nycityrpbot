const DISCORD = require('discord.js');
const BOT = new DISCORD.Client();

const FS = require('fs');

const token = require('./js/token.js');
const loadData = require('./js/loadData.js');
const backup = require('./js/backup.js');
const analyseMessage = require('./js/analyseMessage.js');

process.stdout.write('\033c');

loadData.loadData();

console.log('[TOKEN] ' + token.token);
BOT.login(token.token);
console.log('[BOT] Le bot a démarré.');

BOT.on('ready', () => {
    console.log('[BOT] Connecté en tant que '+ BOT.user.tag);
    BOT.user.setPresence({ game: { name: 'New-York City RP', type: 0, url:'https://www.twitch.tv/discordapp' } }); // jeu en cours
    console.log('[BOT] En train de jouer à '+ BOT.user.presence.game.name);
    console.log('[BOT] Bot prêt!');
});

BOT.on('message', message => {
    if (!message.author.bot) {  //le bot ne peut pas réagir aux messages des bots
        if(message.channel.id=="397785283548151808") {  //messages unqiement acceptés dans le channel de test
            console.log("[MSG] Message reçu de " + message.author.username);
            let reponse = analyseMessage.analyseMessage(message);
            if (reponse != undefined && reponse!="") {  // répondre uniquement si réponse présente
                message.reply(reponse);
            }
            return;
        }
    }
});
