
fetch('http://localhost:8080/vagas')
    .then(response => response.json())
    .then(data => {
        const vagasList = document.getElementById('vagas-list');
        data.forEach(vaga => {
            const vagaDiv = document.createElement('div');
            // Adiciona a classe 'vaga-item' à div
            vagaDiv.classList.add('vaga-item');
            vagaDiv.innerHTML = `
            <header class="vaga-cabecalho">
                <section class="cabecalho-esq">
                    <div class="logo">
                        <img class="logo-img" src="${vaga.logo}"> 
                        <p>${vaga.empresa}</p>
                    </div>
                    <p class="cargo">${vaga.cargo}</p>
                    <p class="local">${vaga.local}</p>
                </section>
                <section class="cabecalho-dir">
                    <a href="form.html" class="candidatura-link"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff"><g><rect fill="none" height="24" width="24"/></g><g><path d="M11,21h-1l1-7H7.5c-0.88,0-0.33-0.75-0.31-0.78C8.48,10.94,10.42,7.54,13.01,3h1l-1,7h3.51c0.4,0,0.62,0.19,0.4,0.66 C12.97,17.55,11,21,11,21z"/></g></svg>Candidatura rápida</a>
                </section>
            </header>
            <p class="atribuicoes"> ${vaga.atribuicoes}</p>
            <p class="regime">Regime: ${vaga.regime}</p>
            <hr>
            <section class="salario">
                <h3 class="salario-titulo">Salário base</h3>
                <div class="salario-container">
                    <p class="salario-dado"><span class="salario-dado-real">${vaga.salario}</span>/mês (est. Empresa)</p>
                    <p class="salario-local">${vaga.local}</p>
                </div>
            </section>
            
            `;
            vagasList.appendChild(vagaDiv);
        });

    })
    .catch(error => console.error('Erro ao carregar os filmes:', error));
