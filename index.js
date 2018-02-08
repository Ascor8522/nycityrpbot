const DISCORD = require('discord.js');
const BOT = new DISCORD.Client();

const FS = require('fs');

const token = require('./js/token.js');
const loadData = require('./js/loadData.js');
const save = require('./js/save.js');
const analyseMessage = require('./js/analyseMessage.js');
const data = require('./js/data.js');
const daySince1970 = require('./js/daySince1970.js');

process.stdout.write('\033c');

console.log(daySince1970.time()+" [TOKEN] " + token.token);
BOT.login(token.token);
console.log(daySince1970.time()+" [BOT] Le bot a démarré.");

BOT.on('ready', () => {
    console.log("\t   [BOT] Connecté en tant que "+ BOT.user.tag);
    BOT.user.setPresence({ game: { name: 'New-York City RP', type: 0, url:'https://www.twitch.tv/discordapp' } }); // jeu en cours
    console.log("\t   [BOT] En train de jouer à "+ BOT.user.presence.game.name);
    console.log("\t   [BOT] Bot prêt!");
});

BOT.on('message', message => {
    if (!message.author.bot) {  //le bot ne peut pas réagir aux messages des bots
        if(message.channel.id=="397785283548151808") {  //messages unqiement acceptés dans le channel de test
            let reponse = analyseMessage.analyseMessage(message);
            if (reponse!="") {  // répondre uniquement si réponse présente
                message.reply(reponse);
            }
            return;
        }
    }
});
