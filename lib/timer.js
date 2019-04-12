function countdownTimer() {

    let countDownTimer = new Date("Apr 12, 2019 12:58:25").getTime();

    // Update the count down every 1 second
    let x = setInterval(function () {

        // Get todays date and time
        let now = new Date().getTime();

        // Find the distance between now an the count down date
        let distance = countDownTimer - now;

        // Time calculations for days, hours, minutes and seconds
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = minutes + ": " + seconds;

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
}
{/* <p id="demo"></p> */}