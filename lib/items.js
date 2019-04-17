
// function clock() {
//     let mytime = new Date(2019, 0, 1, 03, 55, 01, 567);
//     let minutes = mytime.getMinutes();
//     let hours = mytime.getHours();
//     let currentTime = "0" + hours + ":" + minutes;

//     document.getElementById("clock").firstChild.nodeValue = currentTime;

// }
// setInterval(clock);

function mouse() {
    let modal = document.getElementById('mouseModal');
    let span = document.getElementsByClassName("close")[1];
    let mouse = document.getElementById("mouse");
    let button = document.getElementById("mouse-close-button");

    mouse.onclick = function () {
        modal.style.display = "block";
    };

    span.onclick = function () {
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

let n1 = 0;
let n2 = 3;
let n3 = 5;
let n4 = 5;
let n5 = 5;

document.getElementById("number1").innerHTML = n1;
document.getElementById("number2").innerHTML = n2;
document.getElementById("number3").innerHTML = n3;
document.getElementById("number4").innerHTML = n4;
document.getElementById("number5").innerHTML = n5;

function incN1() {
    if (n1 > 9) {
        n1 = 0;
        document.getElementById("number1").innerHTML = n1;
    } else {
        document.getElementById("number1").innerHTML = n1++;
    }
}

function incN2() {
    if (n2 > 9) {
        n2 = 0;
        document.getElementById("number2").innerHTML = n2;
    } else {
        document.getElementById("number2").innerHTML = n2++;
    }
}

function incN3() {
    if (n3 > 9) {
        n3 = 0;
        document.getElementById("number3").innerHTML = n3;
    } else {
        document.getElementById("number3").innerHTML = n3++;
    }
}

function incN4() {
    if (n4 > 9) {
        n4 = 0;
        document.getElementById("number4").innerHTML = n4;
    } else {
        document.getElementById("number4").innerHTML = n4++;
    }
}

function incN5() {
    if (n5 > 9) {
        n5 = 0;
        document.getElementById("number5").innerHTML = n5;
    } else {
        document.getElementById("number5").innerHTML = n5++;
    }
}


function ups() {
    alert("It's locked! Try to find the combination to find out what this locker hides!");
}

if (n1 == 0 && n2 == 0 && n3 == 0 && n4 == 0 && n5 == 0) {
    document.getElementById('lock').id = "unlock";
}

