let rooms = ["./images/room1.png", "./images/room2-nomouse.png", "./images/room3.png"];
let darkRooms = ["./images/room1-dark.png", "./images/room2-dark.png", "./images/room3-dark.png"];
let first = 0;
let roomType = "light";

function changeImage(e) {
    let room = document.getElementById("roomChange");

    if (e.key === "ArrowLeft") {
        if(roomType === "light"){
            return room.src = rooms[(first += 2) % 3];
        }else if (roomType === "dark") {
            return room.src = darkRooms[(first +=2) %3];
        }
    } else if (e.key === "ArrowRight") {
        if (roomType === "light") {
            return room.src = rooms[(first += 1) % 3];
        } else if (roomType === "dark") {
            return room.src = darkRooms[(first += 1) % 3];
        }
    } 
}

document.onkeydown = function (e) {
    changeImage(e);
};


function lightSwitch() {
    let image = document.getElementById('light');
    let room = document.getElementById('roomChange');

    if (image.src.match("on")) {
        image.src = "images/lightswitch-off.png";
        roomType = "dark";
        room.src = darkRooms[first % 3];
    } else {
        image.src = "images/lightswitch-on.png";
        roomType = "light";
        room.src = rooms[first % 3];
    }
}
