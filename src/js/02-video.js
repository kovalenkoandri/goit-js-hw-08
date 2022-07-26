import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
try {
  player.on(
    'timeupdate',
    throttle(function (data) {
      localStorage.setItem(
        'videoplayer-current-time',
        JSON.stringify(data.seconds)
      );
    }, 1000)
  );

  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
} catch (error) {
  console.log(error);
}