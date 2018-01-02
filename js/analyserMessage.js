const clearChannel = require('./clearChannel.js');

module.exports = {
    analyserMessage: function (message) {
        var entree = message.content.split(" ");
        var toReturn = "";
        var commandes = [
            "Commande inconnue. Tapez **$help** pour avoir le liste des commandes.",
            "\t**$help** Affiche la liste de toutes les commandes.",
            "\t**$jouer** Créé un profil pour jouer (indispensable).",
            "\t**$banque help** Affiche l'aide concernant la banque.",
            "\t**$magasin help** Affiche l'aide concernant le magasin.",
            "\t**$métier help** Affiche l'aide concernant les métiers."
        ];
        if (entree[0].charAt(0)=="$") {
            switch (entree[0]) {
                case '$help':
                    toReturn = "\n" ;
                    for( var i=1;i<6;i++) {
                        toReturn = toReturn + commandes[i] + "\n";
                    }
                    break;
                case '$banque':
                    toReturn = commandes[3];
                    break;
                case '$métier':
                case '$metier':
                    toReturn = commandes[5];
                    break;
                case '$clear':
                    clearChannel.clearChannel(message);
                    break;
                default:
                    toReturn = commandes[0];
            }
        }
        return toReturn;
    }
}