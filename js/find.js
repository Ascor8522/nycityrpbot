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