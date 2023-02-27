import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(saveCurrentTime, 1000));
function saveCurrentTime(event) {

    const timeValue = JSON.stringify(event);
    localStorage.setItem(STORAGE_KEY, timeValue);
}
let getCurrentTime = localStorage.getItem(STORAGE_KEY);
if (!getCurrentTime) {
    getCurrentTime = {seconds: 0}
} else {
    getCurrentTime = JSON.parse(getCurrentTime)
}

player.setCurrentTime(getCurrentTime.seconds).then(function (seconds) {
    
    }
    // seconds = the actual time that the player seeked to
).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});