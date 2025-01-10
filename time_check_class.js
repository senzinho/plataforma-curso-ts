// Dados simulados de exemplo
var aulasTestData = [
    {
        id: 1,
        titulo_aula: "Introdução ao JavaScript",
        url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    {
        id: 2,
        titulo_aula: "Manipulação de DOM com JavaScript",
        url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY"
    },
    {
        id: 3,
        titulo_aula: "Funções e Eventos em JavaScript",
        url_youtube: "https://www.youtube.com/embed/3JZ_D3ELwOQ"
    }
];
// Função para buscar uma aula pelo ID (substituindo find)
function buscarAulaPorId(aulas, aulaId) {
    for (var i = 0; i < aulas.length; i++) {
        if (aulas[i].id === aulaId) {
            return aulas[i];
        }
    }
    return null; // Retorna null se não encontrar
}
// Função para renderizar uma aula por vez
var renderizarAula = function (aulaId) {
    var container = document.getElementById("aulas-container");
    container.innerHTML = ""; // Limpar o container antes de renderizar a próxima aula
    var aula = buscarAulaPorId(aulasTestData, aulaId);
    if (aula) {
        var aulaDiv = document.createElement("div");
        aulaDiv.className = "aula";
        aulaDiv.innerHTML = "\n            <div class=\"aula-title\">".concat(aula.titulo_aula, "</div>\n            <iframe \n              src=\"").concat(aula.url_youtube, "\" \n              frameborder=\"0\" \n              allowfullscreen \n              id=\"video-").concat(aula.id, "\"></iframe>\n            <div class=\"checkbox-container\">\n              <label>\n                <input type=\"checkbox\" id=\"checkbox-").concat(aula.id, "\">\n                Aula conclu\u00EDda\n              </label>\n              <button id=\"btn-").concat(aula.id, "\" disabled>Ir para Pr\u00F3xima Aula</button>\n            </div>\n          ");
        container.appendChild(aulaDiv);
        var checkbox = document.getElementById("checkbox-".concat(aula.id));
        var button = document.getElementById("btn-".concat(aula.id));
        // Habilitar o botão ao marcar o checkbox
        checkbox.addEventListener("change", function () {
            button.disabled = !checkbox.checked;
        });
        // Redirecionar para a próxima aula ao clicar no botão
        button.addEventListener("click", function () {
            var nextAulaId = aula.id + 1; // Determina o próximo ID
            var nextAula = buscarAulaPorId(aulasTestData, nextAulaId);
            if (nextAula) {
                renderizarAula(nextAulaId); // Renderiza a próxima aula
            }
            else {
                alert("Você concluiu todas as aulas!");
            }
        });
    }
};
// Renderiza a primeira aula ao carregar a página
renderizarAula(1);
