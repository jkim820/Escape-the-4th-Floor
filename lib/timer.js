function countdownTimer(duration, display) {

    // let countDownTimer = new Date("Apr 12, 2019 12:58:25").getTime();

    // // Update the count down every 1 second
    // let x = setInterval(function () {

    //     // Get todays date and time
    //     let now = new Date(); //.getTime();

    //     // // Find the distance between now an the count down date
    //     // let distance = countDownTimer - now;
    //     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //     // Output the result in an element with id="start"
    //     document.getElementById("start").innerHTML = minutes + ": " + seconds;

    //     // If the count down is over, write some text 
    //     if (distance < 0) {
    //         clearInterval(x);
    //         document.getElementById("countdown").innerHTML = "YOU LOSE!";
    //     }
    // }, 1000);

    let timer = duration, minutes, seconds;
    setInterval(function () {
        let minutes = parseInt(timer / 60, 10);
        let seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMins = 60 * 5,
    display = document.querySelector('#start');
    startTimer(fiveMins, display);
};
