const DISCORD = require('discord.js');
const BOT = new DISCORD.Client();

const FS = require('fs');

const backup = require('./js/backup.js');
const loadData = require('./js/loadData.js');
const getToken = require('./js/getToken.js');

console.log(getToken.getToken());

//BOT.login();

BOT.on('ready', () => {
    console.log('Bot prêt!');
    console.log('Connecté en tant que '+ BOT.user.tag);
    data =  loadData.loadData();
    console.log('Données réceptionnées.');
});

var data;

BOT.on('message', message => {
    let reponse = analyerMessage(message);
    if (reponse) {
        message.channel.reponse(reponse);
    }
    return;
});

//backup.backup(data);