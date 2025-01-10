// Função para manipular o clique no botão "Acessar"
document.querySelectorAll('.btn-access').forEach(function (button) {
    button.addEventListener('click', function (event) {
        var courseCard = event.target.closest('.course-card');
        if (courseCard) {
            var courseId = courseCard.getAttribute('data-course-id');
            if (courseId) {
                // Redirecionar para aulas.html com o id do curso (caso necessário)
                window.location.href = "aulas.html?courseId=".concat(courseId);
            }
        }
    });
});
