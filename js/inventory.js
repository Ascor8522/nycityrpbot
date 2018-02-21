const data = require('./data.js');
const find = require('./find.js');

module.exports = {
    afficher:function(id) {
        var toReturn = "Voici le contenu de votre inventaire:\n";
        var pos = find.trouveJoueur(id);
        if (data.data.joueurs[pos].inventaire.length>0) {
            for (var obj in data.data.joueurs[pos].inventaire) {
                toReturn = toReturn + (Number.parseInt(obj)+1) +". "+data.data.joueurs[pos].inventaire[obj].quantite+"x "+data.data.joueurs[pos].inventaire[obj].nom+"\n";
            }
        } else {
            toReturn = "Votre inventaire est vide.";
        }
        return toReturn;
    },

    supprimer:function(id, obj) {
        var player = find.trouveJoueur(id);
        var pos = find.trouveObjet(obj);
        if (pos!=-1) {
            console.log("\t   "+id+" n'a pas pu supprimer l'objet "+obj+" de son inventaire.");
            toReturn = "Erreur. Veuillez réessayer ou contacter un gérant.";
        } else {
            console.log("\t   "+id+" a suprimmé "+data.data.joueurs[player].inventaire[pos].nom+" de son inventaire.");
            toReturn = data.data.joueurs[player].inventaire[pos].nom+" a bien été supprimé de votre inventaire.";
            data.data.joueurs[player].inventaire.splice(pos, 1);
        }
        return toReturn;
    }
}