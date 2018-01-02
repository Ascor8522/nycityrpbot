const DISCORD = require('discord.js');
const BOT = new DISCORD.Client();

const FS = require('fs');

const backup = require('./js/backup.js');
const loadData = require('./js/loadData.js');
const getToken = require('./js/getToken.js');
const analyserMessage = require('./js/analyserMessage.js');

getToken.getToken(function(err, result){
    if(err) {
        return console.log(err);
    } else {
        BOT.login(result);
        console.log('[BOT] Le bot a démarré');
    }
  });

BOT.on('ready', () => {
    console.log('[BOT] Bot prêt!');
    console.log('[BOT] Connecté en tant que '+ BOT.user.tag);
    data =  loadData.loadData();
    console.log('[DATA] Données réceptionnées.');
});

var data;

BOT.on('message', message => {
    if (message.author.id!="397490345585278977") {
        if(message.channel.id=="397785283548151808") {

            let reponse = analyserMessage.analyserMessage(message);
            if (reponse) {
                message.reply(reponse);
            }
            return;
        }
    }
});

//backup.backup(data);