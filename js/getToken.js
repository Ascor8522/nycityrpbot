const FS = require('fs');

module.exports = {
    getToken: function (callback){
        FS.readFile('./token', 'utf8', function (err, data) {
            if (err) {
                console.error('[ERREUR TOKEN] Le token n\' a pas pu être récupéré.');
                callback(err);
            } else {
                console.log('[TOKEN] Données lues, passage des données.');
                console.log('[TOKEN] Le token est : ' + data);
                callback(null, data);
            }
        });
    }
}