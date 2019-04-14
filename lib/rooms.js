let rooms = ["./images/room1.png", "./images/room3.png", "./images/room2.png"];

function changeImage(dir) {
    let room = document.getElementById("roomChange");
    room.src = rooms[rooms.indexOf(room.src) + (dir || 1)] || rooms[dir ? (rooms.length - 1) : 0];
}

document.onkeydown = function (e) {
    e = e || window.event;
    if (e.code == 'ArrowRight') {
        changeImage(-1); //left arrow <- show Prev image
    } else if (e.code == 'ArrowLeft') {
        // right arrow -> show next image
        changeImage();
    } // else if (e.code == 'ArrowUp') {
        // changeImage(-1);
        // room.src = "./images/room1.png";
    // }
};