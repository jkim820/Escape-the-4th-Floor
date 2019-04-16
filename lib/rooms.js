let rooms = ["./images/room1.png", "./images/room2-nomouse.png", "./images/room3.png"];
// let darkRooms = ["./images/room1-dark.png", "./images/room2-dark.png", "./images/room3-dark.png"];
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
}

let darkRooms = ["./images/room1-dark.png", "./images/room2-dark.png", "./images/room3-dark.png"];
let index = 0;

function darkenRooms() {
    let image = document.getElementById('dark');
    
    lightSwitch();
    // document.addEventListener("click", function () => {
    // })
    if (image.src === ("images/lightswitch-off.png")) {
        // let room = document.getElementById("dark");
        // let room = document.getElementById("dark").style.zIndex = "3";
        if (e.key === "ArrowLeft") {
            // index = (first += 2) % 3;
            // console.log("room.src");
            return room.src = darkRooms[(index += 2) % 3];
        } else if (e.key === "ArrowRight") {
            return room.src = darkRooms[(index += 1) % 3];
            // index = (first += 1) % 3; 
        } 
    }
}

let btns = document.getElementsByClassName('btn-action');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        toggle(btns[i].value);
    });
}

function toggle(id) {
    let image = document.getElementById(id);
    if (image.style.display === 'block') {
        image.style.display = 'none';
    } else {
        image.style.display = 'block';
    }
};

// let show = function (ele) {
//     ele.style.display = "block";
// };

// let hide = function (ele) {
//     ele.style.display = "none";
// };


// function clock() {
//     let mytime = new Date(2019, 0, 1, 03, 55, 01, 567);
//     let minutes = mytime.getMinutes();
//     let hours = mytime.getHours();
//     let currentTime = "0" + hours + ":" + minutes;

//     document.getElementById("clock").firstChild.nodeValue = currentTime;

// }
// setInterval(clock);

