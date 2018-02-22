const data = require('./data.js');
const save = require('./save.js');
const daySince1970 = require('./daySince1970.js');
const find = require('./find.js');
const exists = require('./exists.js');
const jobs = require('./jobs.js');

module.exports = {
    paySalary : function (id) {
        if (exists.playerExists(id)) {
            var cpt = find.trouveJoueur(id);
            if (data.data.joueurs[cpt].dateARecuSalaire - daySince1970.daySince1970() < 0) {
                var job = find.trouveMetier(data.data.joueurs[cpt].metier);
                var min = jobs.metiers[job].salaireMin;
                var max = jobs.metiers[job].salaireMax;
                var paye = nombreAleatoire(min, max);
                if (data.data.joueurs[cpt].banque=="ferme"||data.data.joueurs[cpt].banque=="cloture") {
                    data.data.joueurs[cpt].portefeuille = data.data.joueurs[cpt].portefeuille + paye;
                    console.log(daySince1970.time()+" [BANQUE] Le joueur "+id+" s'est vu versé la somme de "+paye+"€ sur son portefeuille.");
                } else {
                    data.data.joueurs[cpt].banque = data.data.joueurs[cpt].banque + paye;
                    console.log(daySince1970.time()+" [BANQUE] Le joueur "+id+" s'est vu versé la somme de "+paye+"€ sur son compte en banque.");
                }
                data.data.joueurs[cpt].dateARecuSalaire = daySince1970.daySince1970();
            }
        }
    }
}

function nombreAleatoire(min, max) {
    return (Math.round(Math.random()*(max-min))+min);
}