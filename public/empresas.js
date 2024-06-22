fetch('http://localhost:8080/empresas')
    .then(response => response.json())
    .then(data => {
        const empresasList = document.getElementById('empresas-list')
        data.forEach(empresa => {
            const empresaDiv = document.createElement('div');

            empresaDiv.classList.add('empresa-item');
            empresaDiv.innerHTML = `
            <section class="empresa-cabecalho">
                <div class="empresa-cabecalho-dir">      
                    <div class="logo">
                        <img class="logo-img" src="${empresa.logo}"> 
                    </div>
                    <div class="empresa-info-cabecalho">
                        <span class="empresa-nome">${empresa.nome}</span>
                        <span class="empresa-reputacao">${empresa.reputacao}<span class="material-icons">&#xe838;</span></span>
                    </div>
                </div>
                <div class="empresa-cabecalho-esq">
                    <a href="#" class="seguir btn">Seguir</a>
                    <a href="#" class="avaliar btn">+ Avaliar empresa</a>
                </div>
            </section>
            <section class="empresa-info-texto">
                <h2>Visão geral da empresa ${empresa.nome}</h2>
                <p class="empresa-descricao">${empresa.descricao}</p>
            </section>
            `;
            empresasList.appendChild(empresaDiv);
        });

    })
    .catch(error => console.error('Erro ao carregar os filmes:', error));
