const data = require('./data.js');
const exists = require('./exists.js');
const find = require('./find.js');

module.exports = {
    pay:function(de, a, montant) {
        var toReturn="";
        if (exists.playerExists(de)) {
            de = find.trouveJoueur(de);
            if (exists.playerExists(a)) {
                a = find.trouveJoueur(a);
                if (de != a) {
                    montant = Number.parseInt(montant);
                    if (Number.isInteger(montant)) {
                        if (data.data.joueurs[de].portefeuille>=montant) {
                            data.data.joueurs[de].portefeuille = data.data.joueurs[de].portefeuille - montant;
                            data.data.joueurs[a].portefeuille = data.data.joueurs[a].portefeuille + montant;
                            console.log("\t   [PAY] Le transfert de "+montant+"€ de "+de+" à "+a+" a été effectué.");
                            toReturn = "Transfert effectué.";
                        } else {
                            toReturn = "Vous n'avez pas assez d'argent pour envoyer cette somme.";
                        }
                    } else {
                        toReturn = "Le montant à envoyer n'est pas valide";
                    }
                } else {
                    toReturn = "Vous ne pouvez pas vous envoyer de l'argent à vous-même.";
                }
            } else {
                toReturn = "Le destinataire doit être inscrit pour pouvoir recevoir l'argent.";
            }
        } else {
            toReturn = "Vous devez être inscrit pour pouvoir payer quelqu'un.";
        }
        return toReturn;
    }
}
