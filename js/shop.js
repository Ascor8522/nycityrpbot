const playerExists = require('./playerExists.js');
const commands = require('./commands.js');
const data = require('./data.js');
const find = require('./find.js');

module.exports= {
    stock:function (){
        var toReturn = "Voici le contenu de la boutique:\n";
        if (data.data.magasin.length>0) {
            for (var cpt in data.data.magasin) {
                toReturn = toReturn + data.data.magasin[cpt].quantiteRestante+"x "+data.data.magasin[cpt].nom+" à "+data.data.magasin[cpt].prix+"€\n";
            }
        } else {
            toReturn = "La boutique est vide.\nElle sera prochainement réaprovisionnée.";
        }
        return toReturn;
    }
}