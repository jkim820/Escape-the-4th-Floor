
// function clock() {
//     let mytime = new Date(2019, 0, 1, 03, 55, 01, 567);
//     let minutes = mytime.getMinutes();
//     let hours = mytime.getHours();
//     let currentTime = "0" + hours + ":" + minutes;

//     document.getElementById("clock").firstChild.nodeValue = currentTime;

// }
// setInterval(clock);

function mouse() {
    let modal = document.getElementById('mouseModal');
    let close = document.getElementsByClassName("close")[1];
    let mouse = document.getElementById("mouse");
    let button = document.getElementById("mouse-close-button");

    mouse.onclick = function () {
        modal.style.display = "block";
    };

    close.onclick = function () {
        modal.style.display = "none";
    };

    button.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}