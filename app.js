function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log (campoPesquisa);

    if (campoPesquisa == ""){
      section.innerHTML = "Nenhum filme encontrado"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
       if (titulo.includes(campoPesquisa)  || descricao.includes(campoPesquisa))

       //cria um novo elemento
      // Constrói o HTML para cada item do resultado da pesquisa,
      // incluindo o título, descrição e link para mais informações
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank"> Mais informações </a>
        </div>
      `;
    }
  
    if (!resultados) {
      resultados = "Nenhum filme encontrado. Escreva um termo para pesquisa"
    }
    // Atribui o HTML gerado à seção de resultados,
    // substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }




