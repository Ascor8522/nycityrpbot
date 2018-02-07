const data = require('./data.js');
const daySince1970 = require('./daySince1970.js');

module.exports = {
    playerExists:function(id){
        var existe = false;
        for (var prop in data.data.joueurs) {
            if(data.data.joueurs[prop].id==id) {
                existe=true;
                console.log(daySince1970.time()+" [JOUEUR] Ce joueur existe déjà.");
                console.log("\t Id : "+id);
                break;
            }
        }
        if (!existe) {
            console.log(daySince1970.time()+" [JOUEUR] Ce joueur n'est pas encore.");
            console.log("\t Id : "+id);
        }
    return existe;
    }
}