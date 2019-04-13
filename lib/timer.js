// import Timer from 'easytimer.js';

// export const timer = new Timer();
// timer.start({ countdown: true, startValues: { minutes: 4, seconds: 0 } });
// timer.addEventListener('start', function (e) {
//     $('#start .timer').html(timer.getTimeValues().toString());
// });
// timer.addEventListener('targetAchieved', function (e) {
//     $('#start .timer').html('YOU LOSE!!');
// });

// let minutes = 4;
// let seconds = 44;
// let currentSeconds = 0;
// let currentMinutes = 0;

// setInterval(Decrement, 1000);

// function decrement() {
// //     currentMinutes = Math.floor(seconds / 60);
// //     currentSeconds = seconds % 60;
// //     if (currentSeconds <= 9) {
// //         currentSeconds = "0" + currentSeconds;
// //     }
// //     seconds--;

// //     document.getElementById("start").innerHTML = "0" + currentMinutes + ":" + currentSeconds;
// //     if (seconds !== -1) {
// //         setInterval(Decrement(), 1000);
// //     }
// // }
//     setInterval(function () {
//         let minutes = 3;
//         let seconds = 30;
//         let currentSeconds = seconds % 60;
//         let currentMinutes = Math.floor(minutes % 60);
//         let threeMin = 60 * 3; //three minutes is 180 seconds!
//         if (currentSeconds <= 9) {
//             currentSeconds = "0" + currentSeconds;
//         }
//         seconds--;

//         document.getElementById("start").innerHTML = "0" + currentMinutes + ":" + currentSeconds;
//         if (seconds !== -1) {
//             setInterval(Decrement(), 1000);
//         }
//         let remaining = minutes - seconds % threeMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
//         let result = parseInt(remaining / 60) + ':' + remaining % 60; //format seconds back into mm:ss 
//         document.getElementById('start').innerHTML = result;

//     }, 1000);
// }

function countdown(minutes) {
    let seconds = 60;
    let mins = minutes;
    function counter() {
        //This script expects an element with an ID = "start". You can change that to what ever you want. 
        let start = document.getElementById("start");
        let current_minutes = mins - 1;
        seconds--;
        start.innerHTML = "0" + current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(counter, 1000);
        } else {
            setTimeout(function () {
                if (mins > 1) {
                    countdown(mins - 1);
                }
            }, 1000);
        }
        if (seconds == 0 && mins == 0) {
            document.getElementById('start').innerHTML = 'YOU LOSE!';
            clearInterval();
        }
    }
    counter();
}

countdown(4);