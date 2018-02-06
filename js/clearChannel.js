const daySince1970 = require('./daySince1970.js');

module.exports = {
    clearChannel: function (message) {
        message.channel.bulkDelete(message.channel.messages.array().length)
            .catch(error => console.error(daySince1970.time()+" [CLEAR] " + error));
        console.log(daySince1970.time()+" [CLEAR] " + message.channel.messages.array().length);
    }
}