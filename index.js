const DISCORD = require('discord.js');
const BOT = new DISCORD.Client();

const FS = require('fs');

const backup = require('./js/backup.js');
const loadData = require('./js/loadData.js');
const getToken = require('./js/getToken.js');
const analyseMessage = require('./js/analyseMessage.js');

var data;

process.stdout.write('\033c');

loadData.loadData(function (err, result){
    if(err) {
        console.error('[DATA] Les données n\'ont pas pu être récupérées.');
        return console.log(err);
    } else {
        console.log('[DATA] Les données ont été récupérées.');
        data = result;
        data = JSON.parse(data);
    }
});


getToken.getToken(function(err, result){
    if(err) {
        console.error('[BOT] Le token est incorrect, le bot n\'a pas démarré.');
        return console.error(err);
    } else {
        BOT.login(result);
        console.log('[BOT] Le bot a démarré.');
    }
});

BOT.on('ready', () => {
    BOT.user.setPresence({ game: { name: 'New-York City RP', type: 0 } }); // jeu en cours
    console.log('[BOT] Bot prêt!');
    console.log('[BOT] Connecté en tant que '+ BOT.user.tag);
    //data =  loadData.loadData();
    console.log('[DATA] Données réceptionnées.');
});

BOT.on('message', message => {
    if (message.author.id!="397490345585278977") {  //le bot ne peut pas réagir à ses propres messages
        if(message.channel.id=="397785283548151808") {  //messages unqiement acceptés dans le channel de test
            console.log("[MSG] de " + message.author.username);
            let reponse = analyseMessage.analyseMessage(message);
            if (reponse != undefined && reponse!="") {  // répondre uniquement si réponse présente
                message.reply(reponse);
            }
            return;
        }
    }
});