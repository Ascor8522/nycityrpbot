const exists = require('./exists.js');
const commands = require('./commands.js');
const data = require('./data.js');
const find = require('./find.js');

module.exports= {
    stock:function (){
        var toReturn = "Voici le contenu de la boutique:\n";
        if (data.data.magasin.length>0) {
            for (var cpt in data.data.magasin) {
                toReturn = toReturn +(Number.parseIntcpt(cpt)+1)+". "+data.data.magasin[cpt].quantiteRestante+"x "+data.data.magasin[cpt].nom+" à "+data.data.magasin[cpt].prix+"€\n";
            }
        } else {
            toReturn = "La boutique est vide.\nElle sera prochainement réaprovisionnée.";
        }
        return toReturn;
    },

    buy:function(player_id, obj, qte_demandee) {
        var toReturn;
        if (exists.playerExists(player_id)) {
            if (exists.objectExists(obj)) {
                var obj_place = find.trouveObjet(obj);
                var player = find.trouveJoueur(player_id);
                qte_demandee = Number.parseInt(qte_demandee);
                if(qte_demandee>0) {
                    if (10-data.data.joueurs[player].inventaire.length>0) {
                        if (data.data.magasin[obj_place].quantiteRestante>=qte_demandee) {
                            if (data.data.joueurs[player].portefeuille >= data.data.magasin[obj_place].prix*qte_demandee) {
                                data.data.magasin[obj_place].quantiteRestante = data.data.magasin[obj_place].quantiteRestante - qte_demandee;
                                data.data.joueurs[player].portefeuille = data.data.joueurs[player].portefeuille - (qte_demandee*data.data.magasin[obj_place].prix);
                                data.data.joueurs[player].inventaire.push({nom:data.data.magasin[obj_place].nom, quantite:qte_demandee});
                                toReturn = "Vous venez d'acheter "+qte_demandee+"x "+data.data.magasin[obj_place].nom;
                            } else {
                                toReturn = "Vous n'avez pas assez d'argent pour acheter cet objet.";
                            }
                        } else {
                            toReturn = "Il ne reste pas assez d'exmplaires.\nIl n'y a que "+data.data.magasin[obj_place].quantiteRestante+" "+data.data.magasin[obj_place].nom+" alors que vous en demandez "+qte_demandee;
                        }
                    } else {
                        toReturn = "Votre inventiare est plein, jeter des objets de votre inventaire pour pouvoir acheter cet objet.\n"+commands.commands[18];
                    }
                } else {
                    toReturn = "Quantité demandée invalide.";
                }
            } else {
                toReturn = "Objet non trouvé, avez-vous entré son numéro ou son nom correctement?\n"+commands.commands[11]+"\n"+commands.commands[10];
            }
        } else {
            toReturn = "Vous devez être inscrit pour pouvoir acheter des objets dans la boutique.";
        }
        return toReturn;
    }
}