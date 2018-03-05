const bank = require('./bank.js');
const clearChannel = require('./clearChannel.js');
const commands = require('./commands.js');
const company = require('./company.js');
const data = require('./data.js');
const daySince1970 = require('./daySince1970.js');
const inventory = require('./inventory.js');
const jobs = require('./jobs.js');
const newPlayer = require('./newPlayer.js');
const pay = require('./pay.js');
const paySalary = require('./paySalary.js');
const profile = require('./profile.js');
const save = require('./save.js');
const shop = require('./shop.js');

module.exports = {
    analyseMessage: function (message) {
        var entree = message.content.toLowerCase().split(" ");
		for (var i =0;i<entree.length;i++) { entree[i] = entree[i].normalize('NFD').replace(/[\u0300-\u036f]/g, "");}
        var toReturn ="";
        if (entree[0].charAt(0)=="$") {
            console.log(daySince1970.time()+" [MSG] Message reçu de " + message.author.username);
            console.log("\t   [MSG] Message : "+message.content);
            paySalary.paySalary(message.author.id); //paye le joueur
            switch (entree[0]) {
                case "$help":
                case "$bot":
                case "$nycbot":
                case "$nycitybot":
                case "$aide": if (entree.length==1) { toReturn = renvoyer([1,2,3,9,12,16,19,21],toReturn); } else { toReturn = renvoyer([0,1], toReturn); } break;
                case "$jouer":
                case "$joue":
                case "$play":
                case "$join": if (entree.length==1) { toReturn = newPlayer.newPlayer(message); } else { toReturn = renvoyer([0,2], toReturn); } break;
                case "$banque":
                case "$bank":
                    switch (entree[1]) {
                        case "help": if (entree.length==2) { toReturn = renvoyer([4,5,6,7,8,32], toReturn); } else { toReturn = renvoyer([0,3], toReturn); } break;
                        case "compte":
                        case "account":
                            switch (entree[2]) {
                                case "ouvrir":
                                case "creer":
                                case "open":
                                case "new":
                                case "nouveau": if (entree.length==3) { toReturn = bank.open(message.author.id); } else { toReturn = renvoyer([0,3,4],toReturn); } break;
                                case "cloturer":
                                case "fermer":
                                case "close":
                                case "delete":
                                case "del":
                                case "suprimmer": if (entree.length==3) { toReturn = bank.close(message.author.id); } else { toReturn = renvoyer([0,3,5],toReturn); } break;
                                case "consulter":
                                case "money":
                                case "voir": break;
                                default: toReturn = renvoyer([0, 3, 4, 5, 32], toReturn);
                            } break;
                        case "deposer":
                        case "depose":
                        case "depot":
                        case "ajouter": if (entree.length==3) { toReturn = bank.deposit(message.author.id, entree[2]); } else { toReturn = renvoyer([0,3,6], toReturn); } break;
                        case "retrait":
                        case "retire":
                        case "retirer": if (entree.length==3) { toReturn = bank.withdraw(message.author.id, entree[2]); } else { toReturn = renvoyer([0,3,7], toReturn); } break;
                        case "braquer":
                        case "holdup":
                        case "hold-up":
                        case "casse": break;
                        case "verser":
                        case "virement":
                        case "cheque":
                        case "payer":
                        case "donner": if (entree.length==4) { toReturn = bank.transfer(message.author.id, entree[2], entree[3]); } else { toReturn = renvoyer([0,3,8], toReturn); } break;
                        default: toReturn = renvoyer([0,3], toReturn);
                    } break;
                case "$magasin":
                case "$shop":
                case "$market":
                case "$bazar":
                case "$marche":
                case "$commerce":
                case "$boutique":
                    switch (entree[1]) {
                        case "help": if (entree.length==2) { toReturn = renvoyer([10,11], toReturn); } else { toReturn = renvoyer([0,9], toReturn); } break;
                        case "browse":
                        case "list":
                        case "liste":
                        case "voir":
                        case "stock": if (entree.length==2) { toReturn = shop.stock(); } else { toReturn = renvoyer([0,9,10], toReturn); } break;
                        case "acheter":
                        case "buy":
                        case "prendre": if (entree.length>=4) { toReturn = shop.buy(message.author.id, entree[2], entree.splice(3,entree.length).join(' ')); } else { toReturn = renvoyer([0,9,11], toReturn); } break;
                        case "retirer":
                        case "enlever":
                        case "delete":
                        case "remove": break; /* TODO retirer un item/ tout du shop*/
                        case "ajouter":
                        case "add": break;
                        default: toReturn = renvoyer([0,9], toReturn);
                    } break;
                case "$metier":
                case "$job":
                    switch (entree[1]) {
                        case "help": if (entree.length==2) { toReturn = renvoyer([13,14,15], toReturn); } else { toReturn = renvoyer([0,12], toReturn); } break;
                        case "all":
                        case "see":
                        case "list":
                        case "liste": if (entree.length==2) { toReturn = jobs.list() } else { toReturn = renvoyer([0,12,13], toReturn); } break;
                        case "join":
                        case "travailler":
                        case "faire":
                        case "postuler": if (entree.length==3) { toReturn = prochainement(); } else { toReturn = renvoyer([0,12,13,14], toReturn); } break;
                        case "leave":
                        case "quit":
                        case "abandonner":
                        case "quitter": if (entree.length==2) { toReturn = jobs.leave(message.author.id) } else { toReturn = renvoyer([0,12,15], toReturn); } break;
                        default: toReturn = renvoyer([0,12], toReturn);
                    } break;
                case "$inv":
                case "$poche":
                case "$pocket":
                case "$sac":
                case "$bag":
                case "$backpack":
                case "$inventory":
                case "$inventaire":
                    switch (entree[1]) {
                        case "help": if (entree.length==2) { toReturn = renvoyer([17,18,31], toReturn); } else { toReturn = renvoyer([0,16], toReturn); } break;
                        case "ouvrir":
                        case "consulter":
                        case "voir":
                        case "open": if (entree.length==2) { toReturn = inventory.afficher(message.author.id); } else { toReturn = renvoyer([0,16,17], toReturn); } break;
                        case "jeter":
                        case "suprimmer":
                        case "delete": if (entree.length==3) { toReturn = inventory.supprimer(message.author.id, entree[2]); } else { toReturn = renvoyer([0,16,31], toReturn); } break;
                        default: toReturn = renvoyer([0,16], toReturn);
                    } break;
                case "$payer":
                    switch (entree[1]) {
                        case "help": if(entree.length==2) { toReturn = renvoyer([20], toReturn); } else { toReturn = renvoyer([0,19], toReturn); } break;
                        default: if (entree.length==3) {
                                    toReturn = pay.pay(message.author.id, entree[1], entree[2]);
                                } else { toReturn = renvoyer([0,19], toReturn); }
                    } break;
                case "$entreprise":
                case "$societe":
                case "$boite":
                case "$firme":
                case "$company":
                    switch (entree[1]) {
                        case "help": if (entree.length==2) { toReturn = renvoyer([22,23,24,25], toReturn); } else { toReturn = renvoyer([0,21], toReturn); } break;
                        case "list":
                        case "voir":
                        case "view":
                        case "liste": if (entree.length==2) { toReturn = company.view(); } else { toReturn = renvoyer([0,21,22], toReturn); } break;
                        case "postuler": if (entree.length==3) { /* TODO Postuler entreprise */ toReturn = prochainement(); } else { toReturn = renvoyer([0,21,23], toReturn); } break;
                        case "virer": if (entree.length==4) { /* TODO Virer entreprise */ toReturn = prochainement(); } else { toReturn = renvoyer([0,21,24], toReturn); } break;
                        case "employes": var entreprise = entree.splice(2,2).join(' '); toReturn = company.employes(entreprise); break;
                        case "creer": break;
                        case "renomer":
                        case "rename": if(entree.length>=3) {} else { toReturn = renvoyer([0,21,33], toReturn); } break;
                        default: toReturn = renvoyer([0,21], toReturn);
                    } break;
                case "$profile":
                case "$profil": if (entree.length==1) { toReturn = profile.profile(message.author.id); } else { toReturn = "Commande inconnue." /* TODO */} break;
                case "$clear":
                    if (entree.length==1) {
                        toReturn = "**[ATTENTION] Cette commande est expérimentale et rique de ne pas fonctionner. A utiliser avec prudence donc.**";
                        clearChannel.clearChannel(message);
                        console.log(daySince1970.time()+" [CLEAR] "+message.author.id+" a clear le channel "+message.channel);
                    } else { toReturn = renvoyer([0], toReturn); } break;
                case "$debug":
                case "$data":
                    if (entree.length==1) {
                        toReturn = "**[ATTENTION] Cette commande est expérimentale et rique de ne pas fonctionner. A utiliser avec prudence donc.**\n" + JSON.stringify(data.data);
                        console.log(daySince1970.time()+" [DATA] "+message.author.id+" a demandé un affichage de toutes les données.");
                    } else { toReturn = renvoyer([0], toReturn); } break;
                case "$all":
                case "$commands":
                case "$commands":
                    if (entree.length==1) {
                        all(message);
                        console.log(daySince1970.time()+" [DATA] "+message.author.id+" a demandé un affichage de toutes les commandes.");
                    } else { toReturn = renvoyer([0], toReturn); } break;
                default: toReturn = commands.commands[0];
            }
            save.save(data.data);
        }
        return toReturn;
    }
}

function prochainement(){ return "Cette fonction sera ajoutée prochainement"; }

function all(message) {
    var toReturn ="";
    toReturn = renvoyer([1,2,3,4,5,6,7,8,9,10,11,12], toReturn);
    message.reply(toReturn);
    toReturn ="";
    toReturn = renvoyer([13,14,15,16,17,18], toReturn);
    message.reply(toReturn);
    toReturn ="";
    toReturn = renvoyer ([19,20,21,22,23,24,25], toReturn);
    message.reply(toReturn);
    toReturn ="";
    toReturn = renvoyer([26,27,28,29,30,31,32], toReturn);
    message.reply(toReturn);
    toReturn = "";
}

function renvoyer (tab, toReturn) {
    toReturn = "\n" + toReturn;
    for(var i=0;i<tab.length-1;i++) {
        toReturn = toReturn+ commands.commands[tab[i]] + "\n";
    }
    toReturn = toReturn + commands.commands[tab[tab.length-1]];
    return toReturn;
}
