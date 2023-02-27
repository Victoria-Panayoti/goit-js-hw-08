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
console.log(localStorage);
const getCurrentTime = localStorage.getItem(STORAGE_KEY);
const parsedLocalStorage = JSON.parse(getCurrentTime);

player.setCurrentTime(parsedLocalStorage.seconds !== 0 ? parsedLocalStorage.seconds : 0).then(function (seconds) {
    
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