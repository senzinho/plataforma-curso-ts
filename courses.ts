// Função para manipular o clique no botão "Acessar"
document.querySelectorAll('.btn-access').forEach(button => {
    button.addEventListener('click', (event) => {
        const courseCard = (event.target as HTMLElement).closest('.course-card');
        if (courseCard) {
            const courseId = courseCard.getAttribute('data-course-id');
            if (courseId) {
                // Redirecionar para aulas.html com o id do curso (caso necessário)
                window.location.href = `aulas.html?courseId=${courseId}`;
            }
        }
    });
});
