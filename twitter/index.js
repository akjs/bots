const Twit = require('twit');
const config = require('xtconf')();
const sentiment = require('sentiment');
const bot = new Twit({
    consumer_key: config.get('key'),
    consumer_secret: config.get('secret'),
    access_token: config.get('access_token'),
    access_token_secret: config.get('access_secret'),
    timeout_ms: 60*1000
});


bot.get('statuses/user_timeline', {count: 205, include_rts: false }, (err, data, response) => {
  if (err){
    console.log(err);
  } else {
    data.forEach(function(d){
      console.log(d.text);
      const sent = sentiment(d.text);
      console.log('score', sent.score);
      console.log(d.id_str);
    });
  }
});