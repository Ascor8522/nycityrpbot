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
            }
        });
        var player = {};
        player.id = message.id;
        player.metier = "chomage";
        d.getTime();
        player.dateARecuSalaire = n;
        player.banque = 0;
        player.portefeuille = 0;
        player.inventaire = [];
        d.getTime();
        player.dateInscription = n;
        player.notification = [];
        data["joueurs"].push(player);
        backup.backup(data);
        paySalary.paySalary(message.author.id);
    }
}