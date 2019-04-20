function mouse() {
    let modal = document.getElementById('mouseModal');
    let close = document.getElementsByClassName("close")[1];
    let mouse = document.getElementById("mouse");
    let button = document.getElementById("mouse-close-button");

    mouse.onclick = function () {
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

function projector() {
    let modal = document.getElementById('projectorModal');
    let close = document.getElementsByClassName("close")[2];
    let projector = document.getElementById("projector");
    let button = document.getElementById("projector-close-button");

    projector.onclick = function () {
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