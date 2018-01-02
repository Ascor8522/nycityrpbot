import { Client } from 'discord.js';

const DISCORD = require('discord.js');
const BOT = new DISCORD.Client();

const FS = require('fs');


FS.readFile('token', 'utf8', function (err, data) {
    if (err) {
        return console.error(err);
    } else {
        //BOT.login(data);
        console.log(data);
    }
    
});

BOT.on('ready', () => {
    console.log('Bot pret!');
    console.log('Connecte en tant que '+ BOT.user.tag);
});


BOT.on('message', message => {
    let reponse = analyerMessage(message);
    if (reponse) {
        message.channel.reponse(reponse);
    }
    return;
});

function analyerMessage() {

}