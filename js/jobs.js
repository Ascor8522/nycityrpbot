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
                if (data.data.joueurs[player].metier!="chomage") {
                    var determinant;
                    if (['a','e','i','o','u'].includes(data.data.joueurs[player].metier.charAt(0))) { determinant = "'"; } else { determinant = 'e'; }
                    toReturn = "Vous avez quitté votre travail d"+determinant+data.data.joueurs[player].metier;
                    console.log("\t   "+id+" a quitté son trvail d"+determinant+data.data.joueurs[player].metier);
                    data.data.joueurs[player].metier = "chomage";
                } else {
                    toReturn = "Vous êtes au chomage, et vous ne pouvez pas le quitter, à part en trouvant un travail.";
                }
        } else {
            toReturn = "Vous devez être inscrit pour avoir un travail.";
        }
        return toReturn;
    },

    list:function () {
        var toReturn = "Voilà la liste des différents métiers disponibles:\n";
        for (var job in this.metiers) {
            toReturn = toReturn + (Number.parseInt(job)+1) + ". " + this.metiers[job].fonction + "\t\tSalaire: " + this.metiers[job].salaireMax + "\n";
        }
        return toReturn;
    }
}