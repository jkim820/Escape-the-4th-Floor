// function modal() {
//     $(".show-modal").on("click", function () {
//         $(".modal").css("display", "block");
//     });

//     // close modal
//     $(".modal-close").on("click", function () {
//         $(".modal").css("display", "none");
//     });

//     $(".modal-button").on("click", function () {
//         $(".modal").css("display", "none");
//     });

//     $(".modal").on("click", ".m-backdrop", function () {
//         $(".modal").css("display", "none");
//     });

//     $(document).on("keyup", function (event) {
//         let code = event.keyCode || event.which;
//         if (code == 27) { $(".modal").css("display", "none"); }
//     });
// }

// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};