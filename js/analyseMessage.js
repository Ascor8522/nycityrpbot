const clearChannel = require('./clearChannel.js');
const newPlayer = require('./newPlayer.js');
var commandes = [
    /* 0  */"Commande inconnue. Tapez **$help** pour avoir le liste des commandes.",
    /* 1  */"\t**$help** \t Affiche la liste de toutes les commandes.",
    /* 2  */"\t**$jouer** \t Créé un profil pour jouer (indispensable).",
    /* 3  */"\t**$banque help** \t Affiche l'aide concernant la banque.",
    /* 4  */"\t**$magasin help** \t Affiche l'aide concernant le magasin.",
    /* 5  */"\t**$métier help** \t Affiche l'aide concernant les métiers.",
    /* 6  */"\t**$inventaire help** \t Affiche l'aide concernant l'inventaire.",
    /* 7  */"\t**$banque compte ouvrir** \t Ouvre un compte en banque à votre nom.",
    /* 8  */"\t**$banque compte cloturer** \t Cloture votre compte en banque et met votre argent dans votre inventaire.",
    /* 9  */"\t**$banque déposer <montant>** \t Dépose le montant d'argent que vous avez sur vous sur votre compte en banque.",
    /* 10 */"\t**$banque retrait <montant>** \t Retire le montant d'argent de votre compte et le place dans votre inventaire.",
    /* 11 */"\t**$banque verser <joueur|id> <montant>** \t Verse un certaint montant d'argent à un joueur depuis votre compte.",
    /* 12 */"\t**$magasin stock** \t Affiche les stocks disponibles dans le magasin ainsi que le prix des objets.",
    /* 13 */"\t**$magasin acheter <nom|numéro> <quantité>** Achête les objets dans le magasin et les met dans votre inventaire.",
    /* 14 */"\t**$métier liste** \t Affiche la liste de tous les métiers et salaires.",
    /* 15 */"\t**$métier postuler <métier>** \t Vous affecte un nouveau métier.",
    /* 16 */"\t**$métier quitter** \t Vous quittez votre métier et vous retrouvez sans emploi.",
    /* 17 */"\t**$inventaire ouvrir** \t Ouvre votre inventaire et vous montre son contenu.",
    /* 18 */"\t**$inventaire jeter <objet|numéro> Vous vous débarassez de l'bjet en question.",
    /* 19 */"\t**$payer <joueur|id> <montant>** \t Paye la somme spécifiée au joueur désigné."
];
var metiers = []
module.exports = {
    analyseMessage: function (message) {
        var entree = message.content.split(" ");
        var toReturn;
        if (entree[0].charAt(0)=="$") {
            toReturn = '';
            switch (entree[0]) {
                case '$help':   //aide
                    toReturn = renvoyer([1,2,3,4,5,6],toReturn);
                    break;
                case '$banque': //banque
                case '$bank':
                    switch (entree[1]) {
                        case 'help':
                            toReturn = renvoyer([7,8,9,10,11], toReturn);
                            break;
                        case 'compte':
                            switch (entree[2]) {
                                case 'ouvrir':
                                case 'créer':
                                case 'creer':
                                case 'nouveau':
                                    if (entree.length<4) {
                                        //OUVRIR UN COMPTE
                                        toReturn = 'Cette fonction sera ajoutée prochainement';
                                    } else { toReturn = renvoyer([0,3,7],toReturn); }
                                    break;
                                case 'cloturer':
                                case 'fermer':
                                case 'suprimmer':
                                    if (entree.length<4) {
                                        //CLOTURER UN COMPTE
                                        toReturn = 'Cette fonction sera ajoutée prochainement';
                                    } else { toReturn = renvoyer([0,3,8],toReturn); }
                                    break;
                                default:
                                    toReturn = renvoyer([0, 3, 7, 8], toReturn);
                                    break;
                            }
                            break;
                        case 'déposer':
                        case 'ajouter':
                            if (entree.length<4) {
                                // DEPOSER
                            } else { toReturn = renvoyer([0,3,9], toReturn); }
                            break;
                        case 'retrait':
                        case 'retirer':
                            if (entree.length<4) {
                                // RETRAIT
                            } else { toReturn = renvoyer([0,3,10], toReturn); }
                            break;
                        default:
                            toReturn = renvoyer([0,3,15], toReturn);
                    }
                    break;
                case '$métier': //métier
                case '$metier':
                case '$job':
                    switch (entree[1]) {
                        case 'help':
                            toReturn = renvoyer([14,15,16], toReturn);
                            break;
                        case 'liste':
                            if (entree.length<3) {
                                //LISTE DES METIERS
                            } else { toReturn = renvoyer([0,5,14], toReturn); }
                            break;
                        case 'postuler':
                            
                            break;
                        case 'quitter':
                            if (entree.length<3) {
                                //QUITTER UN METIER
                            } else { toReturn = renvoyer([0,5,16], toReturn); }
                            break;
                        default:
                        toReturn = renvoyer([0,5], toReturn);
                            break;
                    }
                    break;
                case '$jouer':
                    newPlayer.newPlayer(message);
                    break;
                case '$clear':  //effacer tous les messages du channel (marche pas)
                    clearChannel.clearChannel(message);
                    break;
                default:
                    toReturn = commandes[0];
                }
        }
        return toReturn;
    }
}

function renvoyer (tab, toReturn) {
    toReturn = "\n" + toReturn;
    for(var i=0;i<tab.length-1;i++) {
        toReturn = toReturn+ commandes[tab[i]] + '\n';
    }
    toReturn = toReturn + commandes[tab[tab.length-1]];
    return toReturn;
}