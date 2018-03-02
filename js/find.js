const data = require('./data.js');

module.exports = {
    trouveEntreprise:function(entreprise) {
        return data.data.entreprises.findIndex(function(count) {
            return count.nom == entreprise;
        });
    },
    
    trouveJoueur:function(id) {
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