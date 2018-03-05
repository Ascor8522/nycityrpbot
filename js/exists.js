const data = require('./data.js');
const daySince1970 = require('./daySince1970.js');
const jobs = require('./jobs.js');

module.exports = {
    playerExists:function(id) {
        var existe = false;
        if(data.data.joueurs.find(function(count) { return count.id == id; })) {
            existe = true;
        }
        return existe;
    },

    jobExists:function(fonction) {
        var existe = false;
        if(jobs.metiers.find(function(count) { return count.fonction == fonction; })) {
            existe = true;
        }
        return existe;
    },

    objectExists:function(objet) {
        var toReturn = false;
        if (Number.isInteger(Number.parseInt(objet))) { //nombre
            if(objet<=data.data.magasin.length&&objet>0) {
                toReturn = true;
            }
        } else { //nom
            existe = false;
            for (var i=0;i<data.data.magasin.length;i++) {
                if(data.data.magasin[i].nom==objet) {
                    existe = true;
                    break;
                }
            }
        }
        return toReturn;
    },

    companyExists:function(company) {
        var existe = false;
        if(data.data.entreprises.find(function(count) { return count.nom == company; })) {
            existe = true;
        }
        return existe;
    },

    invExists:function(posPlayer,obj) {
        var exists = false;
        /* Si nombre, alors trouver à quoi correspond dans le shop*/
            for (var i =0; i<data.data.joueurs[posPlayer].inventaire.length;i++) {
                if(data.data.joueurs[posPlayer].inventaire[i].nom == obj) {
                    exists = true;
                    break;
                }
            }
        return exists;
    }
}