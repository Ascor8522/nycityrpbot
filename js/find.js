const data = require('./data.js');
const exists = require('./exists.js');
const jobs = require('./jobs.js');
module.exports = {

    trouveMetier:function(metier) {
        var toReturn;
        if (exists.jobExists(metier)) {
            var cpt = 0;
            while(jobs.metiers[cpt].fonction!=metier) {
                cpt++;
            }
            toReturn = cpt;
        } else {
            toReturn = -1;
        }
        return toReturn;
    },

    trouveJoueur:function(id) {
        /*
        if (!Number.isInteger(id)) {
            id = client.users.get("name", id).id;
        }
        */
        var cpt = 0;
        while(data.data.joueurs[cpt].id!=id) {
            cpt++;
        }
        return cpt;
    },

    trouveObjet:function(obj) {
        var toReturn;
        if (Number.isInteger(obj)) { //nombre
            if (exists.objectExists(obj)) {
                var cpt = 0;
                while(data.data.magasin[cpt].nom!=obj) {
                    cpt++;
                }
                toReturn = cpt;
            } else {
                toReturn = -1;
            }
        } else {
            toReturn = -1;
        }
        return toReturn;
    },

    trouveEntreprise:function(nom) {
        var toReturn;
        if (exists.companyExists(nom)) {
            var cpt = 0;
            while(data.data.entreprises[cpt].nom!=nom) {
                cpt++;
            }
            toReturn = cpt;
        } else {
            toReturn = -1;
        }
        return toReturn;
    }
}