interface Aula {
    id: number;
    titulo_aula: string;
    url_youtube: string;
  }
  
  // Dados simulados de exemplo
  const aulasTestData: Aula[] = [
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
  const renderizarAulas = (aulas: Aula[]) => {
    const container = document.getElementById("aulas-container") as HTMLDivElement;
  
    aulas.forEach(aula => {
      const aulaDiv = document.createElement("div");
      aulaDiv.className = "aula";
      aulaDiv.innerHTML = `
        <div class="aula-title">${aula.titulo_aula}</div>
        <iframe 
          src="${aula.url_youtube}" 
          frameborder="0" 
          allowfullscreen 
          id="video-${aula.id}"></iframe>
        <div class="checkbox-container">
          <label>
            <input type="checkbox" id="checkbox-${aula.id}">
            Aula concluída
          </label>
          <button id="btn-${aula.id}" disabled>Ir para Próxima Aula</button>
        </div>
      `;
      container.appendChild(aulaDiv);
  
      const checkbox = document.getElementById(`checkbox-${aula.id}`) as HTMLInputElement;
      const button = document.getElementById(`btn-${aula.id}`) as HTMLButtonElement;
  
      // Habilitar o botão ao marcar o checkbox
      checkbox.addEventListener("change", () => {
        button.disabled = !checkbox.checked;
      });
  
      // Redirecionar ao clicar no botão
      button.addEventListener("click", () => {
        window.location.href = "http://127.0.0.1:5500/aulas.html";
      });
    });
  };
  
  // Chamar a função para renderizar as aulas com dados de exemplo
  renderizarAulas(aulasTestData);
  