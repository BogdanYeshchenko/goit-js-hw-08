import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const lastPlayTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(lastPlayTime);

const getLiveTime = () => {
  player.getCurrentTime().then(function (seconds) {
    const liveTime = seconds;
    localStorage.setItem('videoplayer-current-time', liveTime);
    console.log(liveTime);
  });
};

const throttleGetLiveTime = throttle(getLiveTime, 1000);

player.on('timeupdate', throttleGetLiveTime);
