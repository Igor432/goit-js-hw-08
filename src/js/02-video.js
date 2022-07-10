import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);





function onPlay(data) {
    console.log(data.seconds)
    localStorage.setItem("videoplayer-current-time", data.seconds);
};


player.on('timeupdate', throttle(onPlay, 1000));




player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});



const currentTime = localStorage.getItem("videoplayer-current-time");


player.setCurrentTime(currentTime).then(function (seconds) {
})


/*
player.on('pause', throttle(onPlay, 500));

*/