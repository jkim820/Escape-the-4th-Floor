// function changeLeftImage() {
//     // if (document.getElementById("pic").src.endsWith('room1.png') === './images/room1.png') {

//     //     document.pic.src = 'room2.png';
//     // }
//     // else if (document.pic.src === './images/room2.png') {

//     //     document.pic.src = 'room1.png';
//     // }

//     if (document.getElementById("pic").src.endsWith('room1.png') !== -1) {
//         document.getElementById("pic").src = "./images/room3.png";
//     } else if (window.document.pic.src.endsWith('room2.png') !== -1) {
//         document.getElementById("pic").src = "./images/room1.png";
//     }
// }

// function changeRightImage() {
//     // if (document.pic.src === './images/room1.png') {

//     //     document.pic.src = 'room2.png';
//     // }
//     // else if (document.pic.src === './images/room2.png') {

//     //     document.pic.src = 'room1.png';
//     // }

//     if (document.getElementById("pic").src.endsWith('room1.png') !== -1) {
//         document.getElementById("pic").src = "./images/room2.png";
//     } else if (window.document.pic.src.endsWith('room3.png') !== -1) {
//         document.getElementById("pic").src = "./images/room1.png";
//     }
// }

let rooms = ["images/room2.png", "images/room1.png", "images/room3.png"];

function changeImage(dir) {
    let room = document.getElementById("roomChange");
    room.src = rooms[rooms.indexOf(room.src) + (dir || 1)] || rooms[dir ? rooms.length - 1 : 0];
}

document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        changeImage(-1); //left arrow <- show Prev image
    } else if (e.keyCode == '39') {
        // right arrow -> show next image
        changeImage();
    } // else if (e.keyCode == '40') {
        // changeImage(1);
        // rooms[1];
        // room.src = "./images/room1.png";
    // }
};