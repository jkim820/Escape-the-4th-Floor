let rooms = ["./images/room1.png", "./images/room2.png", "./images/room3.png"];
let first = 0;

function changeImage(e) {
    let room = document.getElementById("roomChange");
    let index = e.code === "ArrowLeft" ? (first += 2) % 3 : (first += 1) % 3; 
    room.src = rooms[index];
}

document.onkeydown = function (e) {
    changeImage(e);
};


function lightSwitch() {
    let image = document.getElementById('light');
    if (image.src.match("on")) {
        image.src = "images/lightswitch-off.png";
    } else {
        image.src = "images/lightswitch-on.png";
    }

    if (image.src === "images/lightswitch-off.png") {
        let rooms = ["./images/room1-dark.png", "./images/room2-dark.png", "./images/room3-dark.png"];
        changeImage();
    }
}


