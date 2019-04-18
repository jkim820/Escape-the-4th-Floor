function countdown(minutes) {
    let seconds = 60;
    let mins = minutes;
    function counter() {
        let start = document.getElementById("start");
        let current_mins = mins - 1;
        seconds--;
        start.innerHTML = "0" + current_mins.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(counter, 1000);
        } else {
            setTimeout(function () {
                if (mins > 1) {
                    countdown(mins - 1);
                }
            }, 1000);
        }
        
        if (seconds < 1 && mins < 1) {
            alert("GAME OVER");
            // document.getElementById('start').innerHTML = 'YOU LOSE!';
            // clearInterval();
        }
        document.getElementsByClassName("modal")[0].style.display = "none";
        // document.getElementsByClassName("close")[0].style.display = "none";
    }
    counter();
}

countdown();