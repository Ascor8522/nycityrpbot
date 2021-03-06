const data = require('./data.js');
const exists = require('./exists.js');
const find = require('./find.js');
const daySince1970 = require('./daySince1970.js');

module.exports = {
    view:function() {
        var toReturn = "\n";
        if (data.data.entreprises.length>0) {
            for (var obj in data.data.entreprises) {
                toReturn = toReturn + (Number.parseInt(obj)+1) +". "+data.data.entreprises[obj].nom+"\tNombre de travailleurs: "+data.data.entreprises[obj].trvailleurs.length+"\n";
            }
        } else {
            toReturn = "Il n'y aucune entreprise dans cette ville.";
        }
        return toReturn;
    },

    new:function(id, nom) {
        var toReturn = "";
        if (exists.playerExists(id)) {
            var player = find.trouveJoueur(id);
            if (data.data.joueurs[player].metier!="patron") {
                if (data.data.joueurs[player].banque!="ferme"&&data.data.joueurs[player].banque!="cloture"&&data.data.joueurs[player].banque>=500) {
                    if (nom.length()<=35) {
                        data.data.joueurs[player].banque = data.data.joueurs[player].banque - 500;
                        var newCompany = new Company(id, nom, daySince1970.daySince1970());
                        data.data.entreprises.push(newCompany);
                        console.log(daySince1970.time()+" [ENTREPRISE] "+message.author.id +" a bien été créé la société "+nom);
                    } else {
                        toReturn = "Le nom choisi pour votre entreprise est trop long, il doit faire au maximum 35 caractères alphanumériques.";
                    }
                } else {
                    toReturn = "Vous n'avez pas assez d'argent pour payer la taxe de création d'entreprise. (500€)";
                }
            } else {
                toReturn = "Vous êtes déjà patron d'une entreprise. Vous ne pouvez pas en créer une deuxième.";
            }
        } else {
            toReturn = "Vous devez avoir un compte pour pouvoir créer une entreprise.";
        }
        return toReturn;
    },

    postuler:function(){
        var toReturn ="";
        return toReturn;
    },

    employes:function(societe) {
        const index = require('./../index.js');
        const data = require('./data.js');
        var toReturn = "";
        if (exists.companyExists(societe)) {
            var cpt = find.trouveEntreprise(societe);

            for (var employes = 0; employes<data.data.entreprises[cpt].trvailleurs.length;employes++) {
                toReturn = toReturn + (Number.parseInt(employes)+1) +". "+index.getUsername(data.data.entreprises[cpt].trvailleurs[employes])+"\n";
            }
        } else {
            toReturn = "Cette société n'existe pas.";
        }
        return toReturn;
    },

    rename:function(societe, id, nouveauNom) {
        var toReturn;
        if(exists.playerExists(id)) {
            if (exists.companyExists(societe)) {
                var pos = find.trouveEntreprise(societe);
                if(data.data.entreprises[pos].patron == id) {
                    var posplayer = find.trouveJoueur(id);
                    if(data.data.joueurs[posplayer].banque>=500) {
                        data.data.entreprises[pos].nom = nouveauNom;
                        data.data.joueurs[posplayer].banque = data.data.joueurs[posplayer].banque - 500;
                        toReturn = "Félicitations, votre entreprise s'appelle dorénavant "+nouveauNom;
                    } else {
                        toReturn = "Vous n'avez pas assez d'argent pour renommer votre société. Il vous faut **au minimum 500$** sur votre **compte en banque** or vous n'en avez que "+data.data.joueurs[posplayer].banque;
                    }
                }
            } else {
                toReturn = "Cette société n'existe pas ou n'a pas été trouvée.";
            }
        } else{
            toReturn = "Vous devez être inscrit pour pouvoir avoir une société et la gérer.";
        }
        return toReturn;
    }
}

function Company(id, nom, date) {
    this.nom = nom;
    this.patron = id;
    this.trvailleurs = [id];
    this.dateCreation = daySince1970.daySince1970();
    this.demandesAdhesion = [];
}