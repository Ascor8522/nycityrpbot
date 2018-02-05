const paySalary = require("./paySalary.js");
const playerExists = require('./playerExists.js');
const data = require('./data.js');
var d = new Date;

module.exports = {
    newPlayer: function newPlayer(message) {
        if(!(playerExists.playerExists(message.author.id))) {
            var newplayer = new Player(message);
            console.log(JSON.stringify(data.data));
            data.data["joueurs"].push(newplayer);
            console.log(JSON.stringify(data.data));
            //save.save(data.data);
            //paySalary.paySalary(message.author.id);
        } else {
            return "Tu es déjà inscrit!";
        }


    }
}

function Player (message) {
    this.id = message.author.id;
    this.metier = "chomage";
    this.dateARecuSalaire = ""
    this.banque = 0;
    this.portefeuille = 0;
    this.inventaire = [];
    this.dateInscription = daySince1970();
    this.notification = [d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds()+" : Félicitations, votre compte a bien été créé."];
}

function daySince1970() {
    return Math.floor(Math.floor(Math.floor(Math.floor(d.getTime()/1000)/60)/60)/24); //Jours depuis le 10/01/1970
}
