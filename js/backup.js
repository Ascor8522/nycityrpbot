const FS = require('fs');

module.exports = {
    backup: function(backup) {
        FS.writeFile('./backup.json', backup, function(err) {
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