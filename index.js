const DISCORD = require('discord.js');
const BOT = new DISCORD.Client();

const FS = require('fs');

FS.readFile('./token', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        BOT.login(data);
    }
});