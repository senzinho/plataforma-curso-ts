document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".course-card button");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Redirecionando para detalhes do curso!");
        });
    });
});
