const FS = require('fs');
const data = require('./data.js');
const daySince1970 = require('./daySince1970.js');

module.exports = {
    save: function(backup) {
        FS.writeFile('./js/data.js', "module.exports.data = "+JSON.stringify(backup)+";", function(err) {
            if(err) {
                console.log(daySince1970.time()+" [ERREUR] Les données n'ont pas pu être sauvegardées.");
                return console.error(err);
            } else {
                console.log(daySince1970.time()+" [BACKUP] Données sauvegardées.");
                return;
            }
        });
    }
}
