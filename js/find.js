const data = require('./data.js');

module.exports = {
    trouveMetier:function (metier) {
        var cpt = 0;
        while(data.data.metiers[cpt].fonction!=metier) {
            cpt++;
        }
        return cpt;
    },

    trouveJoueur:function (id) {
        var cpt = 0;
        while(data.data.joueurs[cpt].id!=id) {
            cpt++;
        }
        return cpt;
    }
}