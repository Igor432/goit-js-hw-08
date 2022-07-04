import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

  

    const onPlay = (data) => {
        const timeSec = data.seconds;
        localStorage.setItem("videoplayer-current-time", timeSec);
        console.log(data.seconds);

    };
    

const timeUpdate = localStorage.getItem("videoplayer-current-time");




player.setCurrentTime(timeUpdate).then(function(seconds) {
})



    player.on('pause', throttle(onPlay, 500));