const data = require('./data.js');
const exists = require('./exists.js');
const find = require('./find.js');

module.exports = {
    profile:function(id) {
        var toReturn;
        if (exists.playerExists(id)) {
            var player = find.trouveJoueur(id);
            toReturn = "Information sur votre profil :\n";
            toReturn = toReturn + "Date inscription:" + data.data.joueurs[player].dateInscription + "\n";
            toReturn = toReturn + "Metier:" + data.data.joueurs[player].metier + "\n";
            toReturn = toReturn + "Compte en banque:" + data.data.joueurs[player].banque + "$\n";
            toReturn = toReturn + "Portefeuille:" + data.data.joueurs[player].portefeuille + "^$\n";
            toReturn = toReturn + "Inventaire:" + data.data.joueurs[player].metier + "\n";
        } else {
            toReturn = "Vous devez d'abord vous créer un compte pour pouvoir afficher votre profil.";
        }
        return toReturn;
    }
}