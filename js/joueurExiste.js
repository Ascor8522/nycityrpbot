const loadData = require('./loadData.js');

module.exporsts = {
    joueurExiste:function joueurExiste(id){
        var data = loadData.loadData(function (err, result){
            if(err) {
                console.error('[DATA] Les données n\'ont pas pu être récupérées.');
                return console.log(err);
            } else {
                console.log('[DATA] Les données ont été récupérées.');
                data = result;
                data = JSON.parse(data);
            }
        });

        var existe = false;
        for (id in data) {
            if(data.joueurs[i].id==id) {
                existe=true;
                console.log("[JOUEUR] Ce joueur n'existe déjà.");
                break;
            }
        }
        if (!existe) {console.log("[JOUEUR] Ce joueur n'existait pas encore.\nId : "+id);}
    return existe;
    }
}