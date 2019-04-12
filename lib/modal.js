function modal() {
    $(".show-modal").on("click", function () {
        $(".modal").css("display", "block");
    });

    // close modal
    $(".modal-close").on("click", function () {
        $(".modal").css("display", "none");
    });

    $(".modal-button").on("click", function () {
        $(".modal").css("display", "none");
    });

    $(".modal").on("click", ".m-backdrop", function () {
        $(".modal").css("display", "none");
    });

    $(document).on("keyup", function (event) {
        let code = event.keyCode || event.which;
        if (code == 27) { $(".modal").css("display", "none"); }
    });
}