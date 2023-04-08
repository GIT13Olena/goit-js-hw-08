import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player(document.querySelector('#vimeo-player'));

player.on(
  'timeupdate',
  throttle(data => {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}
