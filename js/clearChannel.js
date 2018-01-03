module.exports = {
    clearChannel: function (message) {
        message.channel.bulkDelete(message.channel.messages.array().length)
            .catch(error => console.error('[CLEAR] ' + error));
        console.log('[CLEAR] ' + message.channel.messages.array().length);
    }
}