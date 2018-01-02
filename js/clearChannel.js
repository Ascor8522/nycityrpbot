module.exports = {
    clearChannel: function (message) {
        /*
        message.channel.bulkDelete(message.channel.messages.array().length)
            .catch(error => console.log(error));
        */
        console.log(message.channel.messages.array().length);
    }
}