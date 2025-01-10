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
        var video = document.getElementById("video-".concat(aula.id));
        // Habilitar o botão ao marcar o checkbox
        checkbox.addEventListener("change", function () {
            button.disabled = !checkbox.checked;
        });
        // Redirecionar ao clicar no botão
        button.addEventListener("click", function () {
            window.location.href = "http://127.0.0.1:5500/aulas.html";
        });
        // Adicionar evento para verificar o tempo do vídeo
        video.addEventListener("load", function () {
            var _a;
            var iframe = (_a = video.contentWindow) === null || _a === void 0 ? void 0 : _a.document.querySelector("video");
            if (iframe) {
                var videoElement_1 = iframe;
                // Verificar o tempo do vídeo a cada segundo
                var checkTimeRemaining_1 = function () {
                    var remainingTime = videoElement_1.duration - videoElement_1.currentTime;
                    // Se faltar 15 segundos ou menos, marcar o checkbox
                    if (remainingTime <= 15) {
                        checkbox.checked = true;
                        videoElement_1.removeEventListener("timeupdate", checkTimeRemaining_1); // Remover o evento após marcar
                    }
                };
                // Iniciar a verificação do tempo
                videoElement_1.addEventListener("timeupdate", checkTimeRemaining_1);
            }
        });
    });
};
// Chamar a função para renderizar as aulas com dados de exemplo
renderizarAulas(aulasTestData);
