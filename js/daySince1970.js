var d = new Date;

module.exports = {
    daySince1970:function() {
        return Math.ceil(Math.round(Math.round(Math.round(d.now()/1000)/60)/60)/24); //Jours depuis le 10/01/1970
    },

    dateDMYHMS:function() {
        return (d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+" "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
    },

    time:function() {
        return (d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
    }
}