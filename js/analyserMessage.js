module.exports = {
    analyserMessage: function (message) {
        var entree = message.split(" ");
        var toReturn = "";
        var commandes = [
            "Commande inconnue. Tapez ```!help``` pour avoir le liste des commandes.",
            "**!help** Affiche la liste de toutes les commandes.",
            "**!jouer** Créé un profil pour jouer (indispensable).",
            "**!banque help** Affiche l'aide concernant la banque.",
            "**!magasin help** Affiche l'aide concernant le magasin.",
            "**!métier help** Affiche l'aide concernant les métiers."
        ];
        if (entree[0].charAt[0]=="!") {
            switch (entree[0]) {
                case '!help':
                    for( var i=1;i<3;i++) {
                        toReturn= toReturn + commandes[i] + "\n";
                    }
                case '!banque':

                    break;
                case '!métier':
                case '!metier':
            }
        } else {
            toReturn = commandes[0];
        }
        return toReturn;
    }
}