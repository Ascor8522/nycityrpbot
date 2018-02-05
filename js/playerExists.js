const data = require('./data.js');

module.exports = {
    playerExists:function(id){
        var existe = false;
        for (var prop in data.data.joueurs) {
            if(data.data.joueurs[prop].id==id) {
                existe=true;
                console.log("[JOUEUR] Ce joueur existe déjà.\n\tId : "+id);
                break;
            }
        }
        if (!existe) {
            console.log("[JOUEUR] Ce joueur n'existait pas encore.\n\tId : "+id);
        }
    return existe;
    }
}