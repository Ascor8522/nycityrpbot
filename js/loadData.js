const FS = require('fs');
const daySince1970 = require('./daySince1970.js');

var data;
module.exports = {
  loadData: function (callback) {
      FS.readFile('./backup.json', 'utf8', function (err, data) {
          if (err) {
              console.error(daySince1970.time()+" [ERREUR] Les données n'ont pas pu être lues.");
              return console.error(err);
          } else {
              console.log(daySince1970.time()+" [DATA] Données lues, passage des données.");
              //callback(null, data);
          }
      });
  }
}
