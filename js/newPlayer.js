const backup = require("./backup.js");
const loadData = require("./loadData");
const paySalary = require("./paySalary.js");
var data;
var d = new Date;
var n;

module.exports = {
    newPlayer: function (message) {
        loadData.loadData(function (err, result){
            if(err) {
                console.error('[DATA] Les données n\'ont pas pu être récupérées.');
                return console.log(err);
            } else {
                console.log('[DATA] Les données ont été récupérées.');
                data = result;
                data = JSON.parse(data);

                var newplayer = new Player(message);

                console.log(JSON.stringify(data));
                data["joueurs"].push(newplayer);
                console.log(JSON.stringify(data));
                /*backup.backup(data);
                paySalary.paySalary(message.author.id);
                */
            }
        });
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
