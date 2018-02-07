var d = new Date;

module.exports = {
    daySince1970:function() {
        d = new Date;
        return Math.ceil(Math.ceil(Math.ceil(Math.ceil(d.getTime()/1000)/60)/60)/24); //Jours depuis le 10/01/1970
    },

    dateDMYHMS:function() {
        d = new Date;
        var jour = d.getDate();
        if (jour<10) { jour = "0"+jour;}
        var mois = d.getMonth();
        if (mois<10) { mois = "0"+mois;}
        var an = d.getFullYear();
        if (an<10) { an = "0"+an;}
        var heure = d.getHours();
        if (heure<10) { heure = "0"+heure;}
        var min = d.getMinutes();
        if (min<10) { min = "0"+min;}
        var sec = d.getSeconds()
        if (sec<10) { sec = "0"+sec;}
        return (jour+"/"+mois+"/"+an+" "+heure+":"+min+":"+sec);
    },

    time:function() {
        d = new Date;
        var heure = d.getHours();
        if (heure<10) { heure = "0"+heure;}
        var min = d.getMinutes();
        if (min<10) { min = "0"+min;}
        var sec = d.getSeconds()
        if (sec<10) { sec = "0"+sec;}
        return (heure+":"+min+":"+sec);
    }
}