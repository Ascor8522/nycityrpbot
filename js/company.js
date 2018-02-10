const data = require('./data.js');

module.exports = {
    view:function() {
        var toReturn = "";
        if (data.data.entreprises.length>0) {
            for (var obj in data.data.joueurs[pos].inventaire) {
                toReturn = toReturn + Number.parseInt(obj) +". "+data.data.entreprises[obj].nom+" "+data.data.entreprises[obj]+"\n";
            }
        } else {
            toReturn = "Il n'y aucune entreprise dans cette ville."
        }
    }
}