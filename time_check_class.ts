interface Aula {
    id: number;
    titulo_aula: string;
    url_youtube: string;
  }
  
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
var aulasAssistidas: { id: number; titulo_aula: string }[] = []; // Lista de aulas concluídas

// Função para renderizar a aula atual
function renderizarAulaAtual() {
    var container = document.getElementById("aulas-container");
    container.innerHTML = ""; // Limpa o conteúdo anterior

    var aula = aulasTestData[currentAulaIndex];

    var aulaDiv = document.createElement("div");
    aulaDiv.className = "aula";
    aulaDiv.innerHTML = `
        <div class="aula-title">${aula.titulo_aula}</div>
        <iframe 
          src="${aula.url_youtube}" 
          frameborder="0" 
          allowfullscreen 
          id="video-${aula.id}" 
          style="width: 100%; height: 500px; max-width: 800px; border-radius: 8px;">
        </iframe>
        <div class="checkbox-container">
          <label>
            <input type="checkbox" id="checkbox-${aula.id}">
            Aula concluída
          </label>
          <button id="btn-next" disabled>Ir para Próxima Aula</button>
        </div>
    `;
    container.appendChild(aulaDiv);

    var checkbox = document.getElementById(`checkbox-${aula.id}`) as HTMLInputElement;
    var button = document.getElementById("btn-next") as HTMLButtonElement;

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
        } else {
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
        aulaItem.innerHTML = `
            <input type="checkbox" checked disabled>
            <a href="#" onclick="voltarParaAula(${aula.id})">${aula.titulo_aula}</a>
        `;
        listaContainer.appendChild(aulaItem);
    });
}

// Função para voltar para uma aula específica sem usar findIndex
function voltarParaAula(aulaId: number) {
    var index = -1; // Índice inicial, caso a aula não seja encontrada
    for (let i = 0; i < aulasTestData.length; i++) {
        if (aulasTestData[i].id === aulaId) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        currentAulaIndex = index;
        renderizarAulaAtual();
    } else {
        console.error("Aula não encontrada.");
    }
}
// Chamar a função para renderizar a aula inicial
renderizarAulaAtual();
