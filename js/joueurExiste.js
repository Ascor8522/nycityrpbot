module.exporsts = {
    joueurExiste:function joueurExiste(id){
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