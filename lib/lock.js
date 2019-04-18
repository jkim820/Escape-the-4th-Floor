// combo = [3, 5, 5];

let number = document.getElementsByClassName("number");
let numberScroll = document.getElementsByClassName("number-scroll");

for (let i = 0; i < number.length; i++) {
    numberScroll[i].addEventListener("click", changeNum);
    console.log(numberScroll[i]);
}

function changeNum() {
    spans = document.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
        if (spans[i].classList.contains("top-num")) {
            spans[i].classList.remove("top-num");
        }
        if (spans[i].classList.contains("bottom-num")) {
            spans[i].classList.remove("bottom-num");;
        }
    }
    spans[0].classList.add("top-num");
    spans[2].classList.add("bottom-num");

    for (let i = 0; i < spans.length; i++) {
        if (spans[i].classList.contains("top-num")) {
            spans[i].classList.remove("top-num");
            console.log(spans[i + 1]);
            spans[i + 1].classList.add("top-num");
            i++;
        }
        if (spans[i].classList.contains("bottom-num")) {
            spans[i].classList.remove("bottom-num");
            spans[i + 1].classList.add("bottom-num");
            i += 1;
        }
    }
    console.log(document.getElementsByTagName("div"));
}