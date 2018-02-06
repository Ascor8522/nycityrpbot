const playerExists = require('./playerExists.js');
const data = require('./data.js');
const daySince1970 = require('./daySince1970.js');

module.exports = {
    newPlayer: function newPlayer(message) {
        if(!(playerExists.playerExists(message.author.id))) {
            var newplayer = new Player(message);
            data.data["joueurs"].push(newplayer);
            console.log("[JOUEUR] Le compte du joueur "+message.author.id +" a bien été créé.");
            return "Inscription réussie! bienvenue dans l'aventure";
        } else {
            return "Tu es déjà inscrit!";
        }


    }
}

function Player (message) {
    this.id = message.author.id;
    this.metier = "chomage";
    this.dateARecuSalaire = 0;
    this.banque = "ferme";
    this.portefeuille = 0;
    this.inventaire = [];
    this.dateInscription = daySince1970.daySince1970();
    this.notification = [daySince1970.dateDMYHMS()+" : Félicitations, votre compte a bien été créé."];
}
