
const FS = require('fs');

module.exports = {
    loadData: function (callback) {
        FS.readFile('./backup.json', 'utf8', function (err, data) {
            if (err) {
                console.error('[ERREUR] Les données n\'ont pas pu être lues.');
                return console.error(err);
            } else {
                console.log('[DATA] Données lues, passage des données.');
                callback(null, data);
            }
        });
    }
}
