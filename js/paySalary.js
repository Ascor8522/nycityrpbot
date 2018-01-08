const loadData = require("./loadData");
var data;

function load () {
    loadData.loadData(function (err, result){
        if(err) {
            console.error("[DATA] Les données n\'ont pas pu être récupérées.");
            return console.log(err);
        } else {
            console.log("[DATA] Les données ont été récupérées.");
            data = result;
            data = JSON.parse(data);
        }
    });
}

module.exports = {
    paySalary : function (id) {
        data = load();
        backup.backup(data);
    }
}