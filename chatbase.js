'use strict';

var request = require('request');

class ChatbaseSlack {

	constructor(apiKey) {
		this.apiKey = apiKey;
	}

	logMessage(bot, message, type) {

		// map bot as user if not specified
		if (!message.user) {
			message.user = bot.identity.id;
		}
		console.log('ApiKey: ' + this.apiKey);

		request({
			url: 'https://chatbase.com/api/message',
			method: 'POST',
			json: {
				api_key: this.apiKey,
				type: type,
				user_id: message.user,
				time_stamp: new Date().getTime() / 1000,
				platform: 'Slack',
				message: message
			}
		}, (err, httpRsp, body) => {
			console.log(body);
		});
	}

	// botkit middleware endpoints
	send(bot, message, next) {
		this.logMessage(bot, message, 'bot');
		next();
	};

	// botkit middleware endpoints
	receive(bot, message, next) {
		this.logMessage(bot, message, 'user');
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