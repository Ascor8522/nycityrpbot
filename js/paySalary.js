const data = require('./data.js');
const save = require('./save.js');
const daySince1970 = require('./daySince1970.js');
const find = require('./find.js');
const playerExists = require('./playerExists.js');

module.exports = {
    paySalary : function (id) {
        if (playerExists.playerExists(id)) {
            var cpt = find.trouveJoueur(id);
            console.log(cpt);
            console.log(data.data.joueurs[cpt].dateARecuSalaire);
            console.log(daySince1970.daySince1970());
            console.log(data.data.joueurs[cpt].dateARecuSalaire - daySince1970.daySince1970() < 0);
            if (data.data.joueurs[cpt].dateARecuSalaire - daySince1970.daySince1970() < 0) {
                var paye = nombreAleatoire(data.data.metiers[find.trouveMetier(data.data.joueurs[cpt].metier)].salaireMin, data.data.metiers[find.trouveMetier(data.data.joueurs[cpt].metier)].salaireMax);
                if (data.data.joueurs[cpt].banque=="ferme"||data.data.joueurs[cpt].banque=="cloture") {
                    data.data.joueurs[cpt].portefeuille = data.data.joueurs[cpt].portefeuille + paye;
                } else {
                    data.data.joueurs[cpt].banque = data.data.joueurs[cpt].banque + paye;
                }
                data.data.joueurs[cpt].dateARecuSalaire = daySince1970.daySince1970();
                console.log(daySince1970.time()+" [BANQUE] Le joueur "+id+" s'est vu versé la somme de "+paye+"€.");
            }
        }
    }
}

function nombreAleatoire(min, max) {
    return (Math.round(Math.random()*(max-min))+min);
}