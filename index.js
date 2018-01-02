const DISCORD = require('discord.js');
const BOT = new DISCORD.Client();

const FS = require('fs');

const backup = require('./js/backup.js');
const loadData = require('./js/loadData.js');
const getToken = require('./js/getToken.js');
const analyserMessage = require('./js/analyserMessage.js');

//console.log(getToken.getToken());

BOT.login('Mzk3NDkwMzQ1NTg1Mjc4OTc3.DS0FZQ.LTy61WKDV_vsAJLYK_0NRP0NTZc');
//BOT.login();

BOT.on('ready', () => {
    console.log('Bot prêt!');
    console.log('Connecté en tant que '+ BOT.user.tag);
    data =  loadData.loadData();
    console.log('Données réceptionnées.');
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