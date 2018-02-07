const playerExists = require('./playerExists.js');
const commands = require('./commands.js');
const data = require('./data.js');
const find = require('./find.js');
const daySince1970 = require('./daySince1970.js');

module.exports = {
    open:function(id) {
        var toReturn;
        if (playerExists.playerExists(id)) {
            var cpt = find.trouveJoueur(id);
            if (data.data.joueurs[cpt].banque=="ferme"||data.data.joueurs[cpt].banque=="cloture") {
                data.data.joueurs[cpt].banque=0;
                toReturn = "Votre compte a bien été ouvert.";
                console.log(daySince1970.time()+" [BANQUE] "+id+" vient d'ouvrir son compte.");
            } else {
                toReturn = "Vous avez déjà un compte ouvert à votre nom.";
            }
        } else {
            toReturn = "Vous devez d'abbord vous inscrire avant de pouvoir ouvrir un compte en banque.\nPlus d'infos:\n" + commands.commands[2];
        }
        return toReturn;
    },

    close:function(id) {
        var toReturn;
        if (playerExists.playerExists(id)) {
            var cpt = find.trouveJoueur(id);
            if (data.data.joueurs[cpt].banque!="ferme"||data.data.joueurs[cpt].banque!="cloture") {
                data.data.joueurs[cpt].portefeuille = data.data.joueurs[cpt].portefeuille + data.data.joueurs[cpt].banque;
                data.data.joueurs[cpt].banque="cloture";
                toReturn = "Votre compte a bien été cloturé.";
                console.log(daySince1970.time()+" [BANQUE] "+id+" vient de cloturer son compte.");
            } else {
                toReturn = "Action impossible, soit vous n'avez jamais ouvert de compte, soit vous l'avez déjà cloturé.";
            }
        } else {
            toReturn = "Vous devez d'abbord vous inscrire avant de pouvoir ouvrir (et cloturer) un compte en banque.\nPlus d'infos:\n" + commands.commands[2];
        }
        return toReturn;
    },

    deposit:function(id, montant) {
        var toReturn;
        if (playerExists.playerExists(id)) {
            var cpt = find.trouveJoueur(id);
            if (data.data.joueurs[cpt].banque!="ferme"&&data.data.joueurs[cpt].banque!="cloture") {
                if (Number.isInteger(montant)) {
                    if (data.data.joueurs[cpt].portefeuille>=montant) {
                        data.data.joueurs[cpt].portefeuille = data.data.joueurs[cpt].portefeuille - montant;
                        data.data.joueurs[cpt].banque = data.data.joueurs[cpt].banque + montant;
                        console.log("\t [BANQUE] "+id+" a déposé "+montant+" sur son compte.");
                        toReturn = montant+"€ ont été déposés sur votre compte.";
                    } else {
                        toReturn = "Vous ne pouvez pas déposer ce montant, vous n'avez pas assez d'argent.";
                    }
                } else {
                    toReturn = "Le montant n'est pas vale. Veillez à ce que ce soit un **nombre entier**.";
                }
            } else {
                toReturn = "Action impossible, soit vous n'avez jamais ouvert de compte, soit vous l'avez cloturé.";
            }
        } else {
            toReturn = "Vous devez d'abbord vous inscrire avant de pouvoir déposer de l'argent sur un compte en banque.\nPlus d'infos:\n" + commands.commands[2];
        }
        return toReturn;
    },

    withdraw:function(id, montant) {
        var toReturn;
        if (playerExists.playerExists(id)) {
            var cpt = find.trouveJoueur(id);
            if (data.data.joueurs[cpt].banque!="ferme"&&data.data.joueurs[cpt].banque!="cloture") {
                console.log(montant);
                if (Number.isInteger(montant)&&montant>=0) {
                    if (data.data.joueurs[cpt].banque>=montant) {
                        data.data.joueurs[cpt].banque = data.data.joueurs[cpt].banque - montant;
                        data.data.joueurs[cpt].portefeuille = data.data.joueurs[cpt].portefeuille + montant;
                        console.log("\t [BANQUE] "+id+" a retiré "+montant+" de son compte.");
                        toReturn = "Vous avez retiré "+montant+"€ de votre compte.";
                    } else {
                        toReturn = "Vous ne pouvez pas déposer ce montant, vous n'avez pas assez d'argent.";
                    }
                } else {
                    toReturn = "Le montant n'est pas vale. Veillez à ce que ce soit un **nombre entier positif**.";
                }
            } else {
                toReturn = "Action impossible, soit vous n'avez jamais ouvert de compte, soit vous l'avez cloturé.";;
            }
        } else {
            toReturn = "Vous devez d'abbord vous inscrire avant de pouvoir déposer de l'argent sur un compte en banque.\nPlus d'infos:\n" + commands.commands[2];
        }
        return toReturn;
    }
}