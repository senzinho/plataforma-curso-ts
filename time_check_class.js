// Dados simulados de exemplo
var aulasTestData = [
    {
        id: 1,
        titulo_aula: "Introdução ao JavaScript",
        url_youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ"
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
// Função para renderizar as aulas
var renderizarAulas = function (aulas) {
    var container = document.getElementById("aulas-container");
    aulas.forEach(function (aula) {
        var aulaDiv = document.createElement("div");
        aulaDiv.className = "aula";
        aulaDiv.innerHTML = "\n        <div class=\"aula-title\">".concat(aula.titulo_aula, "</div>\n        <iframe \n          src=\"").concat(aula.url_youtube, "\" \n          frameborder=\"0\" \n          allowfullscreen \n          id=\"video-").concat(aula.id, "\"></iframe>\n        <div class=\"checkbox-container\">\n          <label>\n            <input type=\"checkbox\" id=\"checkbox-").concat(aula.id, "\">\n            Aula conclu\u00EDda\n          </label>\n          <button id=\"btn-").concat(aula.id, "\" disabled>Ir para Pr\u00F3xima Aula</button>\n        </div>\n      ");
        container.appendChild(aulaDiv);
        var checkbox = document.getElementById("checkbox-".concat(aula.id));
        var button = document.getElementById("btn-".concat(aula.id));
        // Habilitar o botão ao marcar o checkbox
        checkbox.addEventListener("change", function () {
            button.disabled = !checkbox.checked;
        });
        // Redirecionar ao clicar no botão
        button.addEventListener("click", function () {
            window.location.href = "http://127.0.0.1:5500/aulas.html";
        });
    });
};
// Chamar a função para renderizar as aulas com dados de exemplo
renderizarAulas(aulasTestData);
