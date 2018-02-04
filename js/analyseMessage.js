const clearChannel = require('./clearChannel.js');
const newPlayer = require('./newPlayer.js');
const loadData = require('./loadData.js');

var commandes = [
    /* 0  */"Commande inconnue. Tapez **$help** pour avoir le liste des commandes.",
    /* 1  */"\t**$help** \t Affiche la liste de toutes les commandes.",
    /* 2  */"\t**$jouer** \t Créé un profil pour jouer (indispensable).",
    /* 3  */"\t**$banque help** \t Affiche l'aide concernant la banque.",
    /* 4  */"\t**$magasin help** \t Affiche l'aide concernant le magasin.",
    /* 5  */"\t**$métier help** \t Affiche l'aide concernant les métiers.",
    /* 6  */"\t**$inventaire help** \t Affiche l'aide concernant l'inventaire.",
    /* 7  */"\t**$payer help** \t Affiche l'aide sur comment payer quelqu'un.",
    /* 8  */"\t**$entreprise help** \t Affiche l'aide concernant les entreprises.",
    /*      ////////////////////////////////////////////////////////////////////// */
    /* 9  */"\t**$banque compte ouvrir** \t Ouvre un compte en banque à votre nom.",
    /* 10 */"\t**$banque compte cloturer** \t Cloture votre compte en banque et met votre argent dans votre inventaire.",
    /* 11 */"\t**$banque déposer <montant>** \t Dépose le montant d'argent que vous avez sur vous sur votre compte en banque.",
    /* 12 */"\t**$banque retrait <montant>** \t Retire le montant d'argent de votre compte et le place dans votre inventaire.",
    /* 13 */"\t**$banque verser <pseudo joueur|id> <montant>** \t Verse un certaint montant d'argent à un joueur depuis votre compte.",
    /* 14 */"\t**$magasin stock** \t Affiche les stocks disponibles dans le magasin ainsi que le prix des objets.",
    /* 15 */"\t**$magasin acheter <nom ojet|numéro> <quantité>** Achête les objets dans le magasin et les met dans votre inventaire.",
    /* 16 */"\t**$métier liste** \t Affiche la liste de tous les métiers et salaires.",
    /* 17 */"\t**$métier postuler <nom métier>** \t Vous affecte un nouveau métier.",
    /* 18 */"\t**$métier quitter** \t Vous quittez votre métier et vous retrouvez sans emploi.",
    /* 19 */"\t**$inventaire ouvrir** \t Ouvre votre inventaire et vous montre son contenu.",
    /* 20 */"\t**$inventaire jeter <nom objet|numéro>** Vous vous débarassez de l'bjet en question.",
    /* 21 */"\t**$payer <pseudo joueur|id> <montant>** \t Paye la somme spécifiée au joueur désigné.",
    /* 22 */"\t**$entreprise liste** \t Affiche la liste de toutes les entreprises",
    /* 23 */"\t**$entreprise postuler <nom entreprise>** \t Vous demandez pour rejoindre l'entreprise indiquée.",
    /* 24 */"\t**$entreprise virer <pseudo joueur|id> <motif>** \t Vire la personne pour un certain motif.\n\t(La personne virée se verra payée l'équivalemnt de 3 mois de salaire comme indemnités.",
    /* 25 */"\t**$entreprise employés <nom entreprise>** \t Affiche la liste des employés de l'entreprise indiquée."
];

var metiers = ["patron","employe", "policier", "banquier", "ambulancier", "chomage"];

module.exports = {
    analyseMessage: function (message) {
		data2 = loadData.loadData();
        var entree = message.content.toLowerCase().split(" ");
				for (var i =0;i<entree.length;i++) { entree[i] = entree[i].normalize('NFD').replace(/[\u0300-\u036f]/g, "")}
        var toReturn;
        if (entree[0].charAt(0)=="$") {
            toReturn = "";
            switch (entree[0]) {
                case "$help":
                case "$bot":
                case "$aide": if (entree.length==1) { toReturn = renvoyer([1,2,3,4,5,6,7,8],toReturn); } else { toReturn = renvoyer([0,1], toReturn); } break;
                case "$jouer":
                case "$play":
                case "$join": if (entree.length==1) { /* TODO Nouveau joueur */ toReturn = prochainement(); newPlayer.newPlayer(message); } else { toReturn = renvoyer([0,2], toReturn); } break;
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
                        case "postuler": if (entree.length==3) { if(metiers.includes(entree[2].normalize('NFD').replace(/[\u0300-\u036f]/g, ""))) { /* TODO Joindre metier*/ toReturn = prochainement(); } else { toReturn = renvoyer([0,5,16], toReturn); } } else { toReturn = renvoyer([0,5,18], toReturn); } break;
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
                case "$data": if (entree.length==1) { toReturn = "**[ATTENTION] Cette commande est expérimentale et rique de ne pas fonctionner. A utiliser avec prudence donc.**\n" + JSON.stringify(data2); } else { toReturn = renvoyer([0], toReturn); } break;
                case "$all":
                case "$commandes":
                case "$commands": if (entree.length==1) { all(message); } else { toReturn = renvoyer([0], toReturn); } break;
                default: toReturn = commandes[0];
            }
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
        toReturn = toReturn+ commandes[tab[i]] + "\n";
    }
    toReturn = toReturn + commandes[tab[tab.length-1]];
    return toReturn;
}
