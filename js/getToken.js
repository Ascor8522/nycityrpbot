const FS = require('fs');

module.exports = {
    getToken: function (){
        FS.readFile('./token', 'utf8', function (err, data) {
            if (err) {
                console.error('[ERREUR] Le token n\' a pas pu être récupéré.');
                return console.error(err);
            } else {
                console.log('[TOKEN] Données lues, passage des données.');
                console.log(data);
                return data;
            }
        });
    }
}