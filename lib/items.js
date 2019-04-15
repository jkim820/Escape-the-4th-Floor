function lightSwitch() {
    let image = document.getElementById('light');
    if (image.src.match("off")) {
        image.src = "images/lightswitch-on.png";
    } else {
        image.src = "images/lightswitch-off.png";
    }
}

function clock() {
    let mytime = new Date(2019, 0, 1, 03, 55, 01, 567);
    let minutes = mytime.getMinutes();
    let hours = mytime.getHours();
    let currentTime = "0" + hours + ":" + minutes;

    document.getElementById("clock").firstChild.nodeValue = currentTime;

}
setInterval(clock);