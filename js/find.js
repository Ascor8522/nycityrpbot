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
        if (Number.isInteger(obj)) { //nombre
            return obj-1;
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