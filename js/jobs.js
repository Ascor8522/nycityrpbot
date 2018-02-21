const data = require('./data.js');
const exists = require('./exists.js');
const find = require('./find.js');

module.exports = {
    "metiers":[
        {"fonction":"patron","salaireMin":2450,"salaireMax":2450},
        {"fonction":"employe","salaireMin":1050,"salaireMax":1450},
        {"fonction":"policier","salaireMin":1150,"salaireMax":1500},
        {"fonction":"banquier","salaireMin":1250,"salaireMax":1500},
        {"fonction":"ambulancier","salaireMin":1600,"salaireMax":1850},
        {"fonction":"pompier","salaireMin":1600,"salaireMax":1850},
        {"fonction":"chomage","salaireMin":850,"salaireMax":850}
    ],

    leave:function(id) {
        var toReturn;
        if (exists.playerExists(id)) {
            var player = find.trouveJoueur(id);
            data.data.joueurs[player].metier = "chomage";
        } else {
            toReturn = "Vous devez être inscrit pour avoir un travail.";
        }
        return toReturn;
    }
}

/*
["patron","employe", "policier", "banquier", "ambulancier", "chomage"];
*/