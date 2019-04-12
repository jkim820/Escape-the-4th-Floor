function countdownTimer() {
    setInterval(function () {
        let now = new Date(); //get current time
        let seconds = now.getMinutes() * 60 + now.getSeconds(); //convert current mm:ss to seconds for easier caculation, we don't care hours.
        let fiveMin = 60 * 5; //five minutes is 300 seconds!
        let remaining = fiveMin - seconds % fiveMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
        let result = parseInt(remaining / 60) + ':' + remaining % 60; //formart seconds back into mm:ss 
        document.getElementById('start').innerHTML = result;

    }, 1000);
}
