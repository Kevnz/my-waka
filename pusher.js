const PushBullet = require('pushbullet');
const config = require('xtconf')();
const pusher = new PushBullet(config.get('pushbullet-key'));



module.exports = function(time) {
  pusher.note(config.get('pushbullet-target'), 'WakaTime Update', `Time logged today ${time}`, function(error, response) {
    console.log('info pushed', time);
    process.exit(0);
  });
}
