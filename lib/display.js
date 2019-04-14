// function showRoom2() {
//     document.getElementById('room2').style.visibility = visible;
// }

// function secondRoom() {
//     // let x = document.getElementById("second-image");
//     // if (x.style.display === "none") {
//     //     x.style.display = "none";
//     // } else {
//     //     x.style.display = "block";
//     // }
//     document.getElementById("navRight").onclick = function () {
//         document.getElementById("room2").style.visibility = "visible";
//     }
// }


function preloadImages() {
    let imagesArray = ["room1.png", "room2.png", "room3.png"];
    let img = new Image();
    for (let i = 0; i < imagesArray.length; i++) {
        img.src = imagesArray[i];
    }

    let imageIndex = 0;
    img.onclick = function() {
        imageIndex++;
        if (imageIndex >= imagesArray.length) {
            imageIndex = 0;
        }

        document.getElementById("myButton").src = imagesArray[imageIndex];
    }
};