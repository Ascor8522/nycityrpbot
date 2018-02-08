const data = require('./data.js');
const exists = require('./exists.js');

module.exports = {
    trouveMetier:function(metier) {

        var cpt = 0;
        while(data.data.metiers[cpt].fonction!=metier) {
            cpt++;
        }
        return cpt;
    },

    trouveJoueur:function(id) {
        if (exists.playerExists(id)) {
            var cpt = 0;
            while(data.data.joueurs[cpt].id!=id) {
                cpt++;
            }
            return cpt;
        } else {
            return -1;
        }
    },

    trouveObjet:function(obj) {
        if (Number.isInteger(obj)) { //nombre
            return obj;
        } else { //nom
            if (exists.objectExists(obj)) {
                var cpt = 0;
                while(data.data.magasin[cpt].nom!=obj) {
                    cpt++;
                }
                return cpt;
            }
        }
    }
}