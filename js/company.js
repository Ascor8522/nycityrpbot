const data = require('./data.js');

module.exports = {
    view:function() {
        var toReturn = "";
        if (data.data.entreprises.length>0) {
            for (var obj in data.data.entreprises) {
                toReturn = toReturn + Number.parseInt(obj) +". "+data.data.entreprises[obj].nom+"\tNombre de travailleurs: "+data.data.entreprises[obj].trvailleurs.length+"\n";
            }
        } else {
            toReturn = "Il n'y aucune entreprise dans cette ville."
        }
    }
}