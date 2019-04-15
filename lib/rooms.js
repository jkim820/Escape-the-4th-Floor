let rooms = ["./images/room1.png", "./images/room2-nomouse.png", "./images/room3.png"];
let first = 0;

function changeImage(e) {
    let room = document.getElementById("roomChange");
    // let index = 0;

    if (e.key === "ArrowLeft") {
        // index = (first += 2) % 3;
        return room.src = rooms[(first += 2) % 3];
    } else if (e.key === "ArrowRight") {
        return room.src = rooms[(first += 1) % 3]; 
        // index = (first += 1) % 3; 
    } 
    // room.src = rooms[index];
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


