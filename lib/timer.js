import Timer from 'easytimer.js';

const timer = new Timer();
timer.start({ countdown: true, startValues: { seconds: 30 } });
timer.addEventListener('start', function (e) {
    $('#countdownExample .values').html(timer.getTimeValues().toString());
});
timer.addEventListener('targetAchieved', function (e) {
    $('#countdownExample .values').html('KABOOM!!');
});
// let minutes = 4;
// let seconds = 44;
// let currentSeconds = 0;
// let currentMinutes = 0;

// setInterval(Decrement, 1000);

// function decrement() {
//     currentMinutes = Math.floor(seconds / 60);
//     currentSeconds = seconds % 60;
//     if (currentSeconds <= 9) {
//         currentSeconds = "0" + currentSeconds;
//     }
//     seconds--;

//     document.getElementById("start").innerHTML = "0" + currentMinutes + ":" + currentSeconds;
//     if (seconds !== -1) {
//         setInterval(Decrement(), 1000);
//     }
// }
    // setInterval(function () {
    //     let minutes = 5;
    //     let seconds = 0;
    //     let currentSeconds = seconds % 60;
    //     let currentMinutes = Math.floor(minutes % 60);
    //     // let fiveMin = 60 * 5; //five minutes is 300 seconds!
    //     if (currentSeconds <= 9) {
    //         currentSeconds = "0" + currentSeconds;
    //     }
    //     seconds--;

    //     document.getElementById("start").innerHTML = "0" + currentMinutes + ":" + currentSeconds;
    //     if (seconds !== -1) {
    //         setInterval(Decrement(), 1000);
    //     }
        // let remaining = minutes - seconds % fiveMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
        // let result = parseInt(remaining / 60) + ':' + remaining % 60; //format seconds back into mm:ss 
        // document.getElementById('start').innerHTML = result;

//     }, 1000);
// }
