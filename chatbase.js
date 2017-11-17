'use strict';

var request = require('request');

ChatbaseSlack = (apiKey) => {
	var that = this;
	that.apiKey = apiKey;

	logMessage = (bot, message, type) => {

		// map bot as user if not specified
		if (!message.user) {
			message.user = bot.identity.id;
		}

		request({
			url: 'https://chatbase.com/api/message',
			method: 'POST',
			json: {
				api_key: that.apiKey,
				type: type,
				user_id: message.user,
				time_stamp: new Date().getTime() / 1000,
				platform: 'Slack',
				message: message
			}
		}, (err, httpRsp, body) => {

		});
	}

	// botkit middleware endpoints
	that.send = (bot, message, next) => {
		logMessage(bot, message, 'bot');
		next();
	};

	// botkit middleware endpoints
	that.receive = (bot, message, next) => {
		logMessage(bot, message, 'user');
		next();
	};
}

module.exports = (apiKey) => {
	if (!apiKey) {
		throw new Error('YOU MUST SUPPLY AN API KEY TO CHATBASE-BOTKIT!');
	}

	return {
		slack: new ChatbaseSlack(apiKey)
	};
};