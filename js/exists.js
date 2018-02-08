const data = require('./data.js');
const daySince1970 = require('./daySince1970.js');

module.exports = {
    playerExists:function(id){
        var existe = false;
        for (var prop in data.data.joueurs) {
            if(data.data.joueurs[prop].id==id) {
                existe=true;
                break;
            }
        }
        if (!existe) {
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
        if (!existe) {
        }
        return existe;
    }
}