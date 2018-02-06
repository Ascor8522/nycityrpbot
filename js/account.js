const playerExists = require('./playerExists.js');
const commands = require('./commands.js');
const data = require('./data.js');
const find = require('./find.js');

module.exports = {
    open : function(id) {
        var toReturn;
        if (playerExists.playerExists(id)) {
            var cpt = find.trouveJoueur(id);
            if (data.data.joueurs[cpt].banque=="ferme"||data.data.joueurs[cpt].banque=="cloture") {
                data.data.joueurs[cpt].banque=0;
                toReturn = "Votre compte a bien été ouvert.";
                console.log("[BANQUE] "+id+" vient d'ouvrir son compte.");
            } else {
                toReturn = "Vous avez déjà un compte ouvert à votre nom.";
            }
        } else {
            toReturn = "Vous devez d'abbord vous inscrire avant de pouvoir ouvrir un compte en banque.\nPlus d'infos:\n" + commands.commands[2];
        }
        return toReturn;
    },
    close : function(id) {
        var toReturn;
        if (playerExists.playerExists(id)) {
            var cpt = find.trouveJoueur(id);
            if (data.data.joueurs[cpt].banque!="ferme"||data.data.joueurs[cpt].banque!="cloture") {
                data.data.joueurs[cpt].banque="cloture";
                toReturn = "Votre compte a bien été ouvert.";
                console.log("[BANQUE] "+id+" vient de cloturer son compte.");
            } else {
                toReturn = "Action impossible, soit vous n'avez jamais ouvert de compte, soit vous l'avez déjà cloturé.";
            }
        } else {
            toReturn = "Vous devez d'abbord vous inscrire avant de pouvoir ouvrir (et cloturer) un compte en banque.\nPlus d'infos:\n" + commands.commands[2];
        }
        return toReturn;
    }
}