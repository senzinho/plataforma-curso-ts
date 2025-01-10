// Dados simulados de exemplo
var aulasTestData = [
    { id: 1, titulo_aula: "Introdução ao JavaScript", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 2, titulo_aula: "Manipulação de DOM com JavaScript", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 3, titulo_aula: "Funções e Eventos em JavaScript", url_youtube: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
];
var aulasConcluidas = [];
// Implementação das funções auxiliares
function find(array, predicate) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var item = array_1[_i];
        if (predicate(item)) {
            return item;
        }
    }
    return undefined;
}
function includes(array, value) {
    return array.some(function (item) { return item === value; });
}
function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            return i;
        }
    }
    return -1;
}
// Renderizar a aula atual
function renderizarAulaAtual(aulaId) {
    var aula = find(aulasTestData, function (a) { return a.id === aulaId; });
    if (!aula)
        return;
    var aulaContainer = document.getElementById("aula-atual");
    if (!aulaContainer)
        return;
    aulaContainer.innerHTML = "\n      <h2>".concat(aula.titulo_aula, "</h2>\n      <iframe src=\"").concat(aula.url_youtube, "\" frameborder=\"0\" allowfullscreen></iframe>\n      <label>\n          <input type=\"checkbox\" id=\"checkbox-").concat(aula.id, "\">\n          Aula conclu\u00EDda\n      </label>\n      <button id=\"proxima-aula-btn\" disabled>Ir para Pr\u00F3xima Aula</button>\n    ");
    var checkbox = document.getElementById("checkbox-".concat(aula.id));
    var button = document.getElementById("proxima-aula-btn");
    checkbox.checked = includes(aulasConcluidas, aula.id);
    checkbox.addEventListener("change", function () {
        button.disabled = !checkbox.checked;
        if (checkbox.checked && !includes(aulasConcluidas, aula.id)) {
            aulasConcluidas.push(aula.id);
            atualizarListaLateral();
        }
    });
    button.addEventListener("click", function () {
        var index = findIndex(aulasTestData, function (a) { return a.id === aulaId; });
        if (index >= 0 && index < aulasTestData.length - 1) {
            renderizarAulaAtual(aulasTestData[index + 1].id);
        }
    });
}
// Atualizar lista lateral de aulas concluídas
function atualizarListaLateral() {
    var listaContainer = document.getElementById("aulas-concluidas");
    if (!listaContainer)
        return;
    listaContainer.innerHTML = "";
    aulasTestData.forEach(function (aula) {
        var _a;
        var aulaItem = document.createElement("div");
        aulaItem.className = "aula-list-item";
        aulaItem.innerHTML = "\n        <input type=\"checkbox\" ".concat(includes(aulasConcluidas, aula.id) ? "checked" : "", " disabled>\n        <a href=\"javascript:void(0)\" class=\"").concat(includes(aulasConcluidas, aula.id) ? "concluida" : "pendente", "\">").concat(aula.titulo_aula, "</a>\n      ");
        (_a = aulaItem.querySelector("a")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            renderizarAulaAtual(aula.id);
        });
        listaContainer.appendChild(aulaItem);
    });
}
// Inicializar ao carregar o DOM
document.addEventListener("DOMContentLoaded", function () {
    renderizarAulaAtual(1);
    atualizarListaLateral();
});
