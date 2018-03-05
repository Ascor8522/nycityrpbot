const exists = require('./exists.js');
const commands = require('./commands.js');
const data = require('./data.js');
const find = require('./find.js');
const daySince1970 = require('./daySince1970.js');

module.exports= {
    stock:function (){
        var toReturn = "Voici le contenu de la boutique:\n";
        if (data.data.magasin.length>0) {
            for (var cpt in data.data.magasin) {
                toReturn = toReturn +(Number.parseInt(cpt)+1)+". "+data.data.magasin[cpt].quantiteRestante+"x "+data.data.magasin[cpt].nom+" à "+data.data.magasin[cpt].prix+"€\n";
            }
        } else {
            toReturn = "La boutique est vide.\nElle sera prochainement réaprovisionnée.";
        }
        return toReturn;
    },

    buy:function(player_id, qte_demandee, obj) {
        var toReturn;
        if (exists.playerExists(player_id)) {
            if (exists.objectExists(obj)) {
                var obj_place = find.trouveObjet(obj);
                var player = find.trouveJoueur(player_id);
                if (Number.isInteger(Number.parseInt(qte_demandee))){
                    qte_demandee = Number.parseInt(qte_demandee);
                    if(qte_demandee>0) {
                        if (10-data.data.joueurs[player].inventaire.length>0) {
                            if (data.data.magasin[obj_place].quantiteRestante>=qte_demandee) {
                                if (data.data.joueurs[player].portefeuille >= data.data.magasin[obj_place].prix*qte_demandee) {
                                    data.data.magasin[obj_place].quantiteRestante = data.data.magasin[obj_place].quantiteRestante - qte_demandee;
                                    data.data.joueurs[player].portefeuille = data.data.joueurs[player].portefeuille - (qte_demandee*data.data.magasin[obj_place].prix);
                                    // TODO si a dans l'inv, alors ajouter à existant
                                        if(exists.invExists(player, obj)) {
                                            var pos_obj_inv = find.trouveDansInv(player, obj);
                                            data.data.joueurs[player].inventaire[pos_obj_inv].quantite = data.data.joueurs[player].inventaire[pos_obj_inv].quantite + qte_demandee;
                                        } else {
                                            data.data.joueurs[player].inventaire.push({nom:data.data.magasin[obj_place].nom, quantite:qte_demandee});
                                        }
                                    toReturn = "Vous venez d'acheter "+qte_demandee+"x "+data.data.magasin[obj_place].nom;
                                    console.log("\t   [BOUTIQUE] "+player_id+" a acheté "+qte_demandee+"x "+data.data.magasin[obj_place].nom);
                                    if (data.data.magasin[obj_place].quantiteRestante==0) {
                                        retirer(obj_place);
                                    }
                                } else {
                                    toReturn = "Vous n'avez pas assez d'argent pour acheter cet objet.";
                                    console.log("\t   [BOUTIQUE] "+player_id+"n'a pas assez d'argent pour acheter"+qte_demandee+"x "+data.data.magasin[obj_place].nom);
                                }
                            } else {
                                toReturn = "Il ne reste pas assez d'exmplaires.\nIl n'y a que "+data.data.magasin[obj_place].quantiteRestante+" "+data.data.magasin[obj_place].nom+" alors que vous en demandez "+qte_demandee;
                                console.log("\t   [BOUTIQUE] + Pas assez d'exemplaires de "+data.data.magasin[obj_place].nom+" pour "+player_id);
                            }
                        } else {
                            toReturn = "Votre inventiare est plein, jeter des objets de votre inventaire pour pouvoir acheter cet objet.\n"+commands.commands[18];
                            console.log("\t   [BOUTIQUE] Inventaire de "+player_id+" plein.");
                        }
                    } else {
                        toReturn = "Quantité demandée invalide.";
                        console.log("\t   [BOUTIQUE] Quantité invalide: "+qte_demandee+"\nLa quantité spécifiée doit être un nombre **positif**.");
                    }
                } else {
                    toReturn = "Quantité demandée invalide.";
                    console.log("\t   [BOUTIQUE] Quantité invalide: "+qte_demandee+"\nLa quantité spécifiée doit être un **nombre entier** positif.");
                }
            } else {
                toReturn = "Objet non trouvé, avez-vous entré son numéro ou son nom correctement?\n"+commands.commands[11]+"\n"+commands.commands[10];
                console.log("\t   [BOUTIQUE] Objet "+obj+" non trouvé.");
            }
        } else {
            toReturn = "Vous devez être inscrit pour pouvoir acheter des objets dans la boutique.";
            console.log("\t   [BOUTIQUE] "+player_id+" n'est pas inscrit.");
        }
        return toReturn;
    }
}

function retirer(place) {
    console.log("\t   [BOUTIQUE] Objet "+data.data.magasin[place].nom+" retiré du shop car il n'y en a plus.");
    data.data.magasin.splice(place, 1);
    var magasin = data.data.magasin;
}