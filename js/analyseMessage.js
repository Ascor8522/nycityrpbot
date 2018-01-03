const clearChannel = require('./clearChannel.js');
const newPlayer = require('./newPlayer.js');

module.exports = {
    analyseMessage: function (message) {
        var entree = message.content.split(" ");
        var toReturn = "";
        var commandes = [
            "Commande inconnue. Tapez **$help** pour avoir le liste des commandes.",
            "\t**$help** \t Affiche la liste de toutes les commandes.",
            "\t**$jouer** \t Créé un profil pour jouer (indispensable).",
            "\t**$banque help** \t Affiche l'aide concernant la banque.",
            "\t**$magasin help** \t Affiche l'aide concernant le magasin.",
            "\t**$métier help** \t Affiche l'aide concernant les métiers.",
            "\t**$inventaire help** \t Affiche l'aide concernant l'inventaire.",
            "\t**$banque compte ouvrir** \t Ouvre un compte en banque à votre nom.",
            "\t**$banque compte cloturer** \t Cloture votre compte en banque et met votre argent dans votre inventaire.",
            "\t**$banque déposer <montant>** \t Dépose le montant d'argent que vous avez sur vous sur votre compte en banque.",
            "\t**$banque retrait <montant>** \t Retire le montant d'argent de votre compte et le place dans votre inventaire.",
            "\t**$banque verser <joueur|id> <montant> \t Verse un certaint montant d'argent à un joueur depuis votre compte.",
            "\t**$magasin stock** \t Affiche les stocks disponibles dans le magasin ainsi que le prix des objets.",
            "\t**$magasin acheter <nom|numéro> <quantité> Achête les objets dans le magasin et les met dans votre inventaire.",
            "\t**$métier liste** \t Affiche la liste de tous les métiers et salaires.",
            "\t**$métier postuler <métier>** \t Vous affecte un nouveau métier.",
            "\t**$métier quitter** \t Vous quittez votre métier et vous retrouvez sans emploi.",
            "\t**$inventaire ouvrir** \t Ouvre votre inventaire et vous montre son contenu.",
            "\t**$inventaire jeter <objet|numéro> Vous vous débarassez de l'bjet en question."

        ];
        if (entree[0].charAt(0)=="$") {
            switch (entree[0]) {
                case '$help':   //aide
                    toReturn = "\n" ;
                    for( var i=1;i<6;i++) {
                        toReturn = toReturn + commandes[i] + "\n";
                    }
                    break;
                case '$banque': //banque
                    switch (entree[1]) {
                        case 'help':
                            toReturn = commandes[];
                        case 'déposer':
                            break;   
                    }
                    break;
                case '$métier': //métier
                case '$metier':
                    toReturn = commandes[5];
                    break;
                case '$jouer':
                    newPlayer.newPlayer();
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