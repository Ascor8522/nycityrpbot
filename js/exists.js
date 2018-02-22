const data = require('./data.js');
const daySince1970 = require('./daySince1970.js');
const jobs = require('./jobs.js');

module.exports = {
    playerExists:function(id){
        var existe = false;
        for (var prop in data.data.joueurs) {
            if(data.data.joueurs[prop].id==id) {
                existe=true;
                break;
            }
        }
        return existe;
    },

    jobExists:function(name) {
        var existe = false;
        for (var prop in jobs.metiers) {
            if(jobs.metiers[prop].function==name) {
                existe=true;
                break;
            }
        }
        return existe;
    },

    objectExists:function(name){
        var existe = false;
        for (var prop in data.data.magasin) {
            if(data.data.magasin[prop].nom==name) {
                existe=true;
                break;
            }
        }
        return existe;
    },

    companyExists:function(name) {
        var existe = false;
        for (var prop in data.data.entreprises) {
            if(data.data.entreprises[prop].nom==name) {
                existe=true;
                break;
            }
        }
        return existe;
    }
}