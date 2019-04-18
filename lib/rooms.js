let rooms = ["./images/room1.png", "./images/room2-nomouse.png"];
let darkRooms = ["./images/room1-dark.png", "./images/room2-dark.png"];
let first = 0;
let roomType = "light";

function checkRoom() {
    let room = document.getElementById("roomChange");
    let mouse = document.getElementById("mouse");
    let solve = document.getElementById('solveModal');
    // let lock = document.getElementById("lock");

    if ((roomType === "light") && (room.src.includes(rooms[1].slice(1, rooms[1].length)))) {
        mouse.className = "";
        solve.className = "";
    } else {
        mouse.className = "hidden"; 
        solve.className = "";
    }

    // if ((roomType === "light") && (room.src.includes(rooms[2].slice(1, rooms[2].length)))) {
    //     lock.className = "";
    // } else {
    //     lock.className = "hidden";
    // }
}
setInterval(checkRoom, 10);

function changeRoom(e) {
    let room = document.getElementById("roomChange");
    // let mouse = document.getElementById("mouse");

    if (e.key === "ArrowLeft") {
        if (roomType === "light"){
            return room.src = rooms[(first += 1) % 2];
        } else if (roomType === "dark") {
            return room.src = darkRooms[(first += 1) % 2];
        }
    } else if (e.key === "ArrowRight") {
        if (roomType === "light") {
            return room.src = rooms[(first += 1) % 2];
        } else if (roomType === "dark") {
            return room.src = darkRooms[(first += 1) % 2];
        }
    } 
}

document.onkeydown = function (e) {
    changeRoom(e);
};


function lightSwitch() {
    let image = document.getElementById('light');
    let room = document.getElementById('roomChange');

    if (image.src.match("on")) {
        image.src = "images/lightswitch-off.png";
        roomType = "dark";
        room.src = darkRooms[first % 2];
    } else {
        image.src = "images/lightswitch-on.png";
        roomType = "light";
        room.src = rooms[first % 2];
    }
}
