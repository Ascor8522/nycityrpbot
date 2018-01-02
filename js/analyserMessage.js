module.exports = {
    analyserMessage: function (message) {
        var entree = message.content.split(" ");
        var toReturn = "";
        var commandes = [
            "Commande inconnue. Tapez **!help** pour avoir le liste des commandes.",
            "**!help** Affiche la liste de toutes les commandes.",
            "**!jouer** Créé un profil pour jouer (indispensable).",
            "**!banque help** Affiche l'aide concernant la banque.",
            "**!magasin help** Affiche l'aide concernant le magasin.",
            "**!métier help** Affiche l'aide concernant les métiers."
        ];
        console.log(entree[0]);
        if (entree[0].charAt[0]=="!") {
            switch (entree[0]) {
                case '!help':
                    for( var i=1;i<3;i++) {
                        toReturn= toReturn + commandes[i] + "\n";
                    }
                    break;
                case '!banque':

                    break;
                case '!métier':
                case '!metier':
                    
                    break;
                default:
                    toReturn = commandes[0];
            }
        }
        console.log(toReturn);
        return toReturn;
    }
}