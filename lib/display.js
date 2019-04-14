function changeImage() {
    // if (document.pic.src === './images/room1.png') {

    //     document.pic.src = 'room2.png';
    // }
    // else if (document.pic.src === './images/room2.png') {

    //     document.pic.src = 'room1.png';
    // }

    if (document.getElementById("pic").src.endsWith('room1.png') !== -1) {
        document.getElementById("pic").src = "./images/room2.png"; 
    } else if (window.document.pic.src.endsWith('room2.png') !== -1) {
        document.getElementById("pic").src = "./images/room3.png";
    } else if (window.document.pic.src.endsWith('room3.png') !== -1) {
        document.getElementById("pic").src = "./images/room1.png";
    }
}