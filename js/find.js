const data = require('./data.js');
const exists = require('./exists.js');
const jobs = require('./jobs.js');

module.exports = {
    
    trouveEntreprise:function(entreprise) {
        console.log(entreprise);
        return data.data.entreprises.findIndex(function(count) {
            return count.nom == entreprise;
        });
    },

    trouveJoueur:function(id) {
        console.log(id);
        return data.data.joueurs.findIndex(function(count) {
            return count.id == id;
        });
    },

    trouveMetier:function(metier) {
        console.log(metier);
        return jobs.metiers.findIndex(function(count) {
            return count.fonction == metier;
        });
    },

    trouveObjet:function(obj) {
        console.log(obj);
        var toReturn;
        if (Number.isInteger(obj)) { //nombre
            if(obj<=data.data.magasin.length) {
                toReturn = obj;
            }
        } else { //nom
            toReturn = data.data.magasin.findIndex(function(count) {
                return count.nom == obj;
            });
        }
        return toReturn;
    }
}