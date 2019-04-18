let modal = document.getElementById('startModal');
let span = document.getElementsByClassName("close");

// Get the button that opens the modal
// let btn = document.getElementById("myBtn");

// open the modal upon click
// btn.onclick = function () {
//     modal.style.display = "block";
// };

// close the modal upon click on <div> (x)
span.onclick = function () {
    modal.style.display = "none";
};

// close modal
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

function solve() {
    let solve = document.getElementById('solveModal');
    let close = document.getElementsByClassName("close")[1];
    let button = document.getElementById("solve-close-button");

    solve.className = "";
    solve.onclick = function () {
        modal.style.display = "block";
    };

    close.onclick = function () {
        modal.style.display = "none";
    };

    button.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

}
