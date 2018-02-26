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
        if (Number.isInteger(objet)) { //nombre
            if(objet<=data.data.magasin.length) {
                toReturn = true;
            }
        } else { //nom
            if(data.data.magasin.find(function(count) { return count.nom == objet; })) {
                existe = true;
            }
        }
        return toReturn;
    },

    companyExists:function(company) {
        var existe = false;
        if(data.data.company.find(function(count) { return count.nom == company; })) {
            existe = true;
        }
        return existe;
    }
}