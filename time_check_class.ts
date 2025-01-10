// Interface para o tipo de dados das aulas
interface Aula {
    id: number;
    titulo_aula: string;
    url_youtube: string;
  }
  
  // Dados simulados de exemplo
  const aulasTestData: Aula[] = [
    { id: 1, titulo_aula: "Aula 1", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 2, titulo_aula: "Aula 2", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 3, titulo_aula: "Aula 3", url_youtube: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
    { id: 4, titulo_aula: "Aula 4", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 5, titulo_aula: "Aula 5", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 6, titulo_aula: "Aula 6", url_youtube: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
    { id: 7, titulo_aula: "Aula 7", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 8, titulo_aula: "Aula 8", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 9, titulo_aula: "Aula 9", url_youtube: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
    { id: 10, titulo_aula: "Aula 10", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 11, titulo_aula: "Aula 11", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 12, titulo_aula: "Aula 12", url_youtube: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
    { id: 13, titulo_aula: "Aula 13", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 14, titulo_aula: "Aula 14", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 15, titulo_aula: "Aula 15", url_youtube: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
    { id: 16, titulo_aula: "Aula 16", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 17, titulo_aula: "Aula 17", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 18, titulo_aula: "Aula 18", url_youtube: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
    { id: 19, titulo_aula: "Aula 19", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 20, titulo_aula: "Aula 20", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 21, titulo_aula: "Aula 21", url_youtube: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
    { id: 22, titulo_aula: "Aula 22", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 23, titulo_aula: "Aula 23", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 24, titulo_aula: "Aula 24", url_youtube: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
    { id: 25, titulo_aula: "Aula 25", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 26, titulo_aula: "Aula 26", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 27, titulo_aula: "Aula 27", url_youtube: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
    { id: 28, titulo_aula: "Aula 28", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 29, titulo_aula: "Aula 29", url_youtube: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 30, titulo_aula: "Aula 30", url_youtube: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
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
  