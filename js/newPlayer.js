const exists = require('./exists.js');
const data = require('./data.js');
const daySince1970 = require('./daySince1970.js');

module.exports = {
    newPlayer: function newPlayer(message) {
        if(!(exists.playerExists(message.author.id))) {
            var newPlayer = new Player(message);
            data.data["joueurs"].push(newPlayer);
            console.log(daySince1970.time()+" [JOUEUR] Le compte du joueur "+message.author.id +" a bien été créé.");
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
