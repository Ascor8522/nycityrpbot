const FS = require('fs');
const data = require('./data.js');

module.exports = {
    save: function(backup) {
        FS.writeFile('./js/data.js', "module.exports.data = "+JSON.stringify(backup)+";", function(err) {
            if(err) {
                console.log('[ERREUR] Les données n\'ont pas pu être sauvegardées.');
                return console.error(err);
            } else {
                console.log("[BACKUP] Données sauvegardées.");
                return;
            }
        });
    }
}
