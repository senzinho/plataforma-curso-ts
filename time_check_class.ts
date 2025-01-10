// Interface para o tipo de dados das aulas
interface Aula {
    id: number;
    titulo_aula: string;
    url_youtube: string;
  }
  
  // Dados simulados de exemplo
  const aulasTestData: Aula[] = [
    { id: 1, titulo_aula: "Introdução ao JavaScript", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 2, titulo_aula: "Manipulação de DOM com JavaScript", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 3, titulo_aula: "Funções e Eventos em JavaScript", url_youtube: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
  ];
  
  let aulasConcluidas: number[] = [];
  
  // Implementação das funções auxiliares
  function find<T>(array: T[], predicate: (item: T) => boolean): T | undefined {
    for (const item of array) {
      if (predicate(item)) {
        return item;
      }
    }
    return undefined;
  }
  
  function includes<T>(array: T[], value: T): boolean {
    return array.some((item) => item === value);
  }
  
  function findIndex<T>(array: T[], predicate: (item: T) => boolean): number {
    for (let i = 0; i < array.length; i++) {
      if (predicate(array[i])) {
        return i;
      }
    }
    return -1;
  }
  
  // Renderizar a aula atual
  function renderizarAulaAtual(aulaId: number) {
    const aula = find(aulasTestData, (a) => a.id === aulaId);
    if (!aula) return;
  
    const aulaContainer = document.getElementById("aula-atual");
    if (!aulaContainer) return;
  
    aulaContainer.innerHTML = `
      <h2>${aula.titulo_aula}</h2>
      <iframe src="${aula.url_youtube}" frameborder="0" allowfullscreen></iframe>
      <label>
          <input type="checkbox" id="checkbox-${aula.id}">
          Aula concluída
      </label>
      <button id="proxima-aula-btn" disabled>Ir para Próxima Aula</button>
    `;
  
    const checkbox = document.getElementById(`checkbox-${aula.id}`) as HTMLInputElement;
    const button = document.getElementById("proxima-aula-btn") as HTMLButtonElement;
  
    checkbox.checked = includes(aulasConcluidas, aula.id);
  
    checkbox.addEventListener("change", () => {
      button.disabled = !checkbox.checked;
      if (checkbox.checked && !includes(aulasConcluidas, aula.id)) {
        aulasConcluidas.push(aula.id);
        atualizarListaLateral();
      }
    });
  
    button.addEventListener("click", () => {
      const index = findIndex(aulasTestData, (a) => a.id === aulaId);
      if (index >= 0 && index < aulasTestData.length - 1) {
        renderizarAulaAtual(aulasTestData[index + 1].id);
      }
    });
  }
  
  // Atualizar lista lateral de aulas concluídas
  function atualizarListaLateral() {
    const listaContainer = document.getElementById("aulas-concluidas");
    if (!listaContainer) return;
  
    listaContainer.innerHTML = "";
  
    aulasTestData.forEach((aula) => {
      const aulaItem = document.createElement("div");
      aulaItem.className = "aula-list-item";
  
      aulaItem.innerHTML = `
        <input type="checkbox" ${includes(aulasConcluidas, aula.id) ? "checked" : ""} disabled>
        <a href="javascript:void(0)" class="${includes(aulasConcluidas, aula.id) ? "concluida" : "pendente"}">${aula.titulo_aula}</a>
      `;
  
      aulaItem.querySelector("a")?.addEventListener("click", () => {
        renderizarAulaAtual(aula.id);
      });
  
      listaContainer.appendChild(aulaItem);
    });
  }
  
  // Inicializar ao carregar o DOM
  document.addEventListener("DOMContentLoaded", () => {
    renderizarAulaAtual(1);
    atualizarListaLateral();
  });
  