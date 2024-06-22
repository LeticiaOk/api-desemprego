fetch('http://localhost:8080/salarios')
    .then(response => response.json())
    .then(data => {
        const salariosList = document.getElementById('salarios-list')
        data.forEach(salario => {
            const salarioDiv = document.createElement('div');

            salarioDiv.classList.add('salario-item');
            salarioDiv.innerHTML = `
            <section class="cargo">
                <h2>Salários do cargo ${salario.cargo} - São Paulo</h2>
                <p class="atualizacao">${salario.atualizacao}</p>
            </section>
            <section class="salario">
                <p class="faixa">Faixa de salário base</p>
                <h3 class="remuneracao">${salario.remuneracao}<span class="mes">/mês</span></h3>
                <p class="media-texto" >Média salarial</p>
                <p class="media-dado">${salario.media}</p>
            </section>
            <section class="informacoes">
                <p class="info-texto">Informações gerais</p>
                <p class="info-dado">${salario.descricao}</p>
            </section>
            `;
            salariosList.appendChild(salarioDiv);
        });

    })
    .catch(error => console.error('Erro ao carregar os salários:', error));
