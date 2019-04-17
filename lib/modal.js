let modal = document.getElementById('startModal');
let close = document.getElementsByClassName("close");

// Get the button that opens the modal
// let btn = document.getElementById("myBtn");

// open the modal upon click
// btn.onclick = function () {
//     modal.style.display = "block";
// };

// close the modal upon click on <div> (x)
close.onclick = function () {
    modal.style.display = "none";
};

// close modal
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};