const backup = require("./backup.js");
const loadData = require("./loadData");
const paySalary = require("./paySalary.js");
const joueurExiste = require('./joueurExiste.js');
var d = new Date;
var n;

module.exports = {
    newPlayer: function newPlayer(message) {
        if(!joueurExiste.joueurExiste(message.author.id)) {

        } else {
            message.reply("Tu es déjà inscrit!")
        }
        /*
        var newplayer = new Player(message);
        console.log(JSON.stringify(data));
        data["joueurs"].push(newplayer);
        console.log(JSON.stringify(data));
        backup.backup(data);
        paySalary.paySalary(message.author.id);
        */
    }
}

function Player (message) {
    this.id = message.id;
    this.metier = "chomage";
    d.getTime();
    this.dateARecuSalaire = n;
    this.banque = 0;
    this.portefeuille = 0;
    this.inventaire = [];
    d.getTime();
    this.dateInscription = n;
    this.notification = [];
}

