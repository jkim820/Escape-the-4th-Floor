let modal = document.getElementById('startModal');
let span = document.getElementsByClassName("close");

// Get the button that opens the modal
// let btn = document.getElementById("myBtn");

// open the modal upon click
// btn.onclick = function () {
//     modal.style.display = "block";
// };

// close the modal upon click on (x)
span.onclick = function () {
    modal.style.display = "none";
};

// close modal
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

function solveModal() {
    let solveModal = document.getElementById("solveModal");
    let solveButton = document.getElementById("solve-button");
    let close = document.getElementsByClassName("close")[0];
    let submit = document.getElementsByClassName("submit-button");

    
    solveModal.style.display = "block";
    solveButton.style.display = "none";
    
    solveButton.onclick = function () {
        solveModal.style.display = "block";
        solveButton.style.display = "none";
    };

    close.onclick = function () {
        solveModal.style.display = "none";
        solveButton.style.display = "block";
    };

    submit.onclick = function () {
        solveModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
}

function getAnswer() {
    let answer = "3:55pm";

    let form = document.forms[0];
    let input = form.elements["solve-name"].value;

    if (answer === input) {
        alert("CHECK IN! YOU WIN!");
        // document.getElementById("confetti").draw();
    } else {
        alert("RESTART AND TRY AGAIN");
    }
}