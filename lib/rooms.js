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

// function darkenRooms(e) {
//     let room = document.getElementById('dark');

//     if (e.key === "ArrowLeft") {
//         return room.src = darkRooms[(first += 2) % 3];
//     } else if (e.key === "ArrowRight") {
//         return room.src = darkRooms[(first += 1) % 3];
//     } 
// }

// // Get the modal
// let modal = document.getElementById('instructionModal');

// // Get the button that opens the modal
// let btn = document.getElementById("instruction-button");

// // Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close");

// // When the user clicks on the button, open the modal 
// btn.onclick = function () {
//     modal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target === modal) {
//         modal.style.display = "none";
//     }
// };
