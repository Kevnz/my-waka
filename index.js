const getWakaTime = require('wakatoday');
const config = require('xtconf')();
const pusher = require('./pusher');
getWakaTime(config.get('wakatime-key')).then(pusher).catch(console.log);

