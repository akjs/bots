const Bot = require('slackbots');
const config = require('xtconf')();
// create a bot
const settings = {
    token: config.get('botOauth'),
    name: config.get('name')
};
const bot = new Bot(settings);

bot.on('start', function() {
    bot.postMessageToChannel('general', 'Hello channel!');
    bot.postMessageToUser('kevin', 'hello kev!');
});

bot.on('message', function(data) {
  // all ingoing events https://api.slack.com/rtm 
  console.log(data);
});