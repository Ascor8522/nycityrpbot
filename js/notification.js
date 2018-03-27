const exists = require('./exists.js');
const data = require('./data.js');
const find = require('./find.js');

module.exports = {
    notification:function(id) {
        var toReturn = "";
        if(exists.playerExists(id)) {
            var pos = find.trouveJoueur(id);
            if(data.data.joueurs[pos].notification.length>0) {
                for(var i=0;i<data.data.joueurs[pos].notification.length;i++) {
                    toReturn = toReturn + "\n**Notification n°"+(+i+1)+":**\n";
                    toReturn = toReturn + data.data.joueurs[pos].notification[i];
                }
                data.data.joueurs[pos].notification = [];
            } else {
                toReturn = "Vous n'avez pas de nouvelles notifications."
            }
        } else {
            toReturn = "Vous devez avoir un compte pour pouvoir voir vos notifications."
        }
        return toReturn;
    }
}