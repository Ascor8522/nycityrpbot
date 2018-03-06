const data = require('./data.js');
const jobs = require('./jobs.js');
module.exports = {
    trouveEntreprise:function(entreprise) {
        const data = require('./data.js');
        return data.data.entreprises.findIndex(function(count) {
            return count.nom == entreprise;
        });
    },
    
    trouveJoueur:function(id) {
        const data = require('./data.js');
        return data.data.joueurs.findIndex(function(count) {
            return count.id == id;
        });
    },
    
    trouveMetier:function(metier) {
        const jobs = require('./jobs.js');
        return jobs.metiers.findIndex(function(count) {
            return count.fonction == metier;
        });
    },

    trouveObjet:function(obj) {
        const data = require('./data.js');
        var toReturn;
        console.log("OBJET: "+obj);
        if (Number.isInteger(Number.parseInt(obj))) { //nombre
            console.log("nombre");
            if(obj<=data.data.magasin.length&&obj>0) {
                toReturn = obj-1;
            }
        } else { //nom
            console.log("texte");
            toReturn = data.data.magasin.findIndex(function(count) {
                return count.nom == obj;
            });
        }
        return toReturn;
    },

    trouveDansInv:function(posPlayer,obj) {
        const data = require('./data.js');
        var toReturn;
        if(Number.isInteger(Number.parseInt(obj))) {
            for (var i =0; i<data.data.joueurs[posPlayer].inventaire.length;i++) {
                if(data.data.joueurs[posPlayer].inventaire[i].nom == data.data.magasin[obj].nom) {
                    exists = i;
                    break;
                }
            }
        } else {
            for (var i =0; i<data.data.joueurs[posPlayer].inventaire.length;i++) {
                if(data.data.joueurs[posPlayer].inventaire[i].nom == obj) {
                    toReturn = i;
                    break;
                }
            }
        }
        return toReturn;
    }
}