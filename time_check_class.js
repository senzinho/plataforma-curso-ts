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
var currentAulaIndex = 0; // Índice da aula atual
var aulasAssistidas = []; // Lista de aulas concluídas
// Função para renderizar a aula atual
function renderizarAulaAtual() {
    var container = document.getElementById("aulas-container");
    container.innerHTML = ""; // Limpa o conteúdo anterior
    var aula = aulasTestData[currentAulaIndex];
    var aulaDiv = document.createElement("div");
    aulaDiv.className = "aula";
    aulaDiv.innerHTML = "\n        <div class=\"aula-title\">".concat(aula.titulo_aula, "</div>\n        <iframe \n          src=\"").concat(aula.url_youtube, "\" \n          frameborder=\"0\" \n          allowfullscreen \n          id=\"video-").concat(aula.id, "\" \n          style=\"width: 100%; height: 500px; max-width: 800px; border-radius: 8px;\">\n        </iframe>\n        <div class=\"checkbox-container\">\n          <label>\n            <input type=\"checkbox\" id=\"checkbox-").concat(aula.id, "\">\n            Aula conclu\u00EDda\n          </label>\n          <button id=\"btn-next\" disabled>Ir para Pr\u00F3xima Aula</button>\n        </div>\n    ");
    container.appendChild(aulaDiv);
    var checkbox = document.getElementById("checkbox-".concat(aula.id));
    var button = document.getElementById("btn-next");
    // Habilitar o botão ao marcar o checkbox
    checkbox.addEventListener("change", function () {
        button.disabled = !checkbox.checked;
    });
    // Ir para a próxima aula
    button.addEventListener("click", function () {
        // Adiciona a aula à lista de aulas assistidas
        aulasAssistidas.push({ id: aula.id, titulo_aula: aula.titulo_aula });
        atualizarListaAulasAssistidas();
        // Vai para a próxima aula, se houver
        if (currentAulaIndex < aulasTestData.length - 1) {
            currentAulaIndex++;
            renderizarAulaAtual();
        }
        else {
            alert("Parabéns! Você concluiu todas as aulas.");
        }
    });
}
// Função para atualizar a lista de aulas assistidas
function atualizarListaAulasAssistidas() {
    var listaContainer = document.getElementById("aulas-assistidas");
    listaContainer.innerHTML = ""; // Limpa a lista anterior
    aulasAssistidas.forEach(function (aula) {
        var aulaItem = document.createElement("div");
        aulaItem.className = "aula-assistida";
        aulaItem.innerHTML = "\n            <input type=\"checkbox\" checked disabled>\n            <a href=\"#\" onclick=\"voltarParaAula(".concat(aula.id, ")\">").concat(aula.titulo_aula, "</a>\n        ");
        listaContainer.appendChild(aulaItem);
    });
}
// Função para voltar para uma aula específica sem usar findIndex
function voltarParaAula(aulaId) {
    var index = -1; // Índice inicial, caso a aula não seja encontrada
    for (var i = 0; i < aulasTestData.length; i++) {
        if (aulasTestData[i].id === aulaId) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        currentAulaIndex = index;
        renderizarAulaAtual();
    }
    else {
        console.error("Aula não encontrada.");
    }
}
// Chamar a função para renderizar a aula inicial
renderizarAulaAtual();
