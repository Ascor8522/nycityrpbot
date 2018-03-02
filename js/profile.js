const data = require('./data.js');
const exists = require('./exists.js');
const find = require('./find.js');
const daysince1970 = require('./daysince1970.js');
const inventory = require('./inventory.js');

module.exports = {
    profile:function(id) {
        var toReturn;
        if (exists.playerExists(id)) {
            var player = find.trouveJoueur(id);
            toReturn = "Information sur votre profil :\n";
            toReturn = toReturn + "Date inscription: \t" + daysince1970.dateAt(data.data.joueurs[player].dateInscription) + "\n";
            toReturn = toReturn + "Metier: \t" + data.data.joueurs[player].metier + "\n";
            toReturn = toReturn + "Compte en banque: \t" + data.data.joueurs[player].banque + "$\n";
            toReturn = toReturn + "Portefeuille: \t" + data.data.joueurs[player].portefeuille + "$\n";
            toReturn = toReturn + "Inventaire: \t" + inventory.afficher(id);
        } else {
            toReturn = "Vous devez d'abord vous créer un compte pour pouvoir afficher votre profil.";
        }
        return toReturn;
    }
}