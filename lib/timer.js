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
    }
    counter();
    
    if (seconds == 0 && mins == 0) {
        alert("GAME OVER");
        // document.getElementById('start').innerHTML = 'YOU LOSE!';
        clearInterval();
    }
}

countdown(3);