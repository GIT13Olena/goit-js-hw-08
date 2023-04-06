import throttle from 'lodash.throttle';
import { Player } from '@vimeo/player/dist/player.js';

const player = new Player(document.getElementById('vimeo-player'));

player
  .on(
    'timeupdate',
    throttle(function (data) {
      window.localStorage.setItem('videoplayer-current-time', data.seconds);
    }, 1000)
  )
  .setCurrentTime(window.localStorage.getItem('videoplayer-current-time'));
