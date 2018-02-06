const clearChannel = require('./clearChannel.js');
const newPlayer = require('./newPlayer.js');
const metiers = require('./jobs.js');
const commandes = require('./commands.js');
const paySalary = require('./paySalary.js');
const save = require('./save.js');
const data = require('./data.js');

module.exports = {
    analyseMessage: function (message) {
        var entree = message.content.toLowerCase().split(" ");
				for (var i =0;i<entree.length;i++) { entree[i] = entree[i].normalize('NFD').replace(/[\u0300-\u036f]/g, "")}
        var toReturn ="";
        if (entree[0].charAt(0)=="$") {
            console.log("[MSG] Message reçu de " + message.author.username);
            console.log("[MSG] Message : "+message.content);
            switch (entree[0]) {
                case "$help":
                case "$bot":
                case "$aide": if (entree.length==1) { toReturn = renvoyer([1,2,3,4,5,6,7,8],toReturn); } else { toReturn = renvoyer([0,1], toReturn); } break;
                case "$jouer":
                case "$joue":
                case "$play":
                case "$join": if (entree.length==1) { /* TODO Nouveau joueur */ toReturn = newPlayer.newPlayer(message); } else { toReturn = renvoyer([0,2], toReturn); } break;
                case "$banque": //banque
                case "$bank":
                    switch (entree[1]) {
                        case "help": if (entree.length==2) { toReturn = renvoyer([9,10,11,12,13], toReturn); } else { toReturn = renvoyer([0,3], toReturn); } break;
                        case "compte":
                            switch (entree[2]) {
                                case "ouvrir":
                                case "creer":
                                case "nouveau": if (entree.length==3) { /* TODO Créer compte*/ toReturn = prochainement(); } else { toReturn = renvoyer([0,3,9],toReturn); } break;
                                case "cloturer":
                                case "fermer":
                                case "suprimmer": if (entree.length==3) { /*TODO Suprimmer compte */ toReturn = prochainement(); } else { toReturn = renvoyer([0,3,10],toReturn); } break;
                                default: toReturn = renvoyer([0, 3, 9, 10], toReturn);
                            }
                        case "déposer":
                        case "ajouter": if (entree.length==3) { /* TODO Déposer banque*/ toReturn = prochainement(); } else { toReturn = renvoyer([0,3,11], toReturn); } break;
                        case "retrait":
                        case "retirer": if (entree.length==3) { /* TODO Retirer banque*/ toReturn = prochainement(); } else { toReturn = renvoyer([0,3,12], toReturn); } break;
                        default: toReturn = renvoyer([0,3], toReturn);
                    } break;
                case "$magasin": //magasin
                case "$shop":
                case "$boutique":
                    switch (entree[1]) {
                        case "help": if (entree.length==2) { toReturn = renvoyer([14,15], toReturn); } else { toReturn = renvoyer([0,4], toReturn); } break;
                        case "stock": if (entree.length==2) { /* TODO Voir les stocks */ toReturn = prochainement(); } else { toReturn = renvoyer([0,4,14], toReturn); } break;
                        case "acheter": if (entree.length==4) { /* TODO Acheter magasin */ toReturn = prochainement(); } else { toReturn = renvoyer([0,4,15], toReturn); } break;
                            default: toReturn = renvoyer([0,4], toReturn);
                    } break;
                case "$metier": //métier
                case "$job":
                    switch (entree[1]) {
                        case "help": if (entree.length==2) { toReturn = renvoyer([16,17,18], toReturn); } else { toReturn = renvoyer([0,5], toReturn); } break;
                        case "liste": if (entree.length==2) { /* TODO Liste metiers */ toReturn = prochainement(); } else { toReturn = renvoyer([0,5,16], toReturn); } break;
                        case "postuler": if (entree.length==3) { if(metiers.metiers.includes(entree[2].normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) { /* TODO Joindre metier*/ toReturn = prochainement(); } else { toReturn = renvoyer([0,5,16], toReturn); } } else { toReturn = renvoyer([0,5,18], toReturn); } break;
                        case "quitter": if (entree.length==3) { /* TODO Quitter metier */ toReturn = prochainement(); } else { toReturn = renvoyer([0,5,18], toReturn); } break;
                        default: toReturn = renvoyer([0,5], toReturn);
                    } break;
                case "$inventaire": //inventaire
                    switch (entree[1]) {
                        case "help": if (entree.length==2) { toReturn = renvoyer([19,20], toReturn); } else { toReturn = renvoyer([0,6], toReturn); } break;
                        case "ouvrir": if (entree.length==2) { /* TODO Ouvrir inventaire */ toReturn = prochainement(); } else { toReturn = renvoyer([0,6,19], toReturn); } break;
                        default: toReturn = renvoyer([0,6], toReturn);
                    } break;
                case "$payer":
                    if (entree.length==3) {
                        if (entree[1]=="help") {
                            toReturn = renvoyer([21], toReturn);
                        } else { /* TODO Payer joueur */ toReturn = prochainement(); }
                    } else { toReturn = renvoyer([0,7], toReturn); } break;
                case "$entreprise": //entreprise
                case "$societe":
                case "$boite":
                case "$firme":
                    switch (entree[1]) {
                        case "help": if (entree.length==2) { toReturn = renvoyer([22,23,24,25], toReturn); } else { toReturn = renvoyer([0,8], toReturn); } break;
                        case "liste": if (entree.length==2) { /* TODO Liste entreprises */ toReturn = prochainement(); } else { toReturn = renvoyer([0,8,22], toReturn); } break;
                        case "postuler": if (entree.length==3) { /* TODO Postuler entreprise */ toReturn = prochainement(); } else { toReturn = renvoyer([0,8,23], toReturn); } break;
                        case "virer": if (entree.length==4) { /* TODO Virer entreprise */ toReturn = prochainement(); } else { toReturn = renvoyer([0,8,24], toReturn); } break;
                        case "employes": if (entree.length==3) { /* TODO Liste employés */ toReturn = prochainement(); } else { toReturn = renvoyer([0,8,25], toReturn); } break;
                        default: toReturn = renvoyer([0,8], toReturn);
                    } break;
                case "$clear": if (entree.length==1) { toReturn = "**[ATTENTION] Cette commande est expérimentale et rique de ne pas fonctionner. A utiliser avec prudence donc.**"; clearChannel.clearChannel(message); } else { toReturn = renvoyer([0], toReturn); } break;
                case "$data": if (entree.length==1) { toReturn = "**[ATTENTION] Cette commande est expérimentale et rique de ne pas fonctionner. A utiliser avec prudence donc.**\n" + JSON.stringify(data); } else { toReturn = renvoyer([0], toReturn); } break;
                case "$all":
                case "$commandes":
                case "$commands": if (entree.length==1) { all(message); } else { toReturn = renvoyer([0], toReturn); } break;
                default: toReturn = commandes.commandes[0];
            }
            save.save(data.data);
        }
        return toReturn;
    }
}

function prochainement(){ return "Cette fonction sera ajoutée prochainement"; }

function all(message) {
    var toReturn ="";
    toReturn = renvoyer([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], toReturn);
    message.reply(toReturn);
    toReturn = "";
    toReturn = renvoyer([16,17,18,19,20,21,22,23,24,25], toReturn);
    message.reply(toReturn);
}

function renvoyer (tab, toReturn) {
    toReturn = "\n" + toReturn;
    for(var i=0;i<tab.length-1;i++) {
        toReturn = toReturn+ commandes.commandes[tab[i]] + "\n";
    }
    toReturn = toReturn + commandes.commandes[tab[tab.length-1]];
    return toReturn;
}
