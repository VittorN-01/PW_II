document.addEventListener('DOMContentLoaded', () => {
    // Adiciona um listener ao formulário para a submissão
    document.getElementById('cadastroTimeForm').addEventListener('submit', async function (e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const nome = document.getElementById('nome').value;
        const abreviacao = document.getElementById('abreviacao').value;
        const nTecnico = document.getElementById('nTecnico').value;
        const nTreinador = document.getElementById('nTreinador').value;

        // Captura a série selecionada
        const serie = document.querySelector('input[name="serie"]:checked');

        if (!serie) {
            alert("Erro: Selecione uma série.");
            return;
        }

        const newTime = {
            nome,
            abreviacao,
            nTecnico,
            nTreinador,
            serie: serie.value // Adiciona a série ao objeto newTime
        };

        // Log dos dados do novo time
        console.log("Novo time sendo cadastrado:", newTime);

        const response = await fetch('/cadastrarTime', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTime)
        });

        // Log do status da resposta
        console.log("Status da resposta:", response.status);

        if (response.ok) {
            const data = await response.json(); // Obtém a resposta do servidor
            alert(data.message); // Exibe a mensagem de sucesso
            document.getElementById('cadastroTimeForm').reset(); // Limpa o formulário

            // Atualiza a lista de times
            const timesResponse = await fetch('/times');
            const timesList = await timesResponse.json();
            console.log("Lista atualizada de times:", timesList);
            // Aqui você pode renderizar os times em um elemento HTML se desejar
        }
    });
});

// Função para validar cadastro
function validarCadastro() {
    const nome = document.getElementById("nome").value;
    const abreviacao = document.getElementById("abreviacao").value;
    const serieA = document.getElementById("serieA").checked;
    const serieB = document.getElementById("serieB").checked;
    const resValidacao = document.getElementById("resValidacao");

    // Validação: se os campos de nome e abreviação não estão vazios
    if (nome && abreviacao) {
        // Verifica se a abreviação tem exatamente 3 letras maiúsculas
        const abreviacaoValida = /^[A-Z]{3}$/.test(abreviacao);
        if (!abreviacaoValida) {
            alert("Erro: A abreviação deve conter exatamente 3 letras maiúsculas.");
            resValidacao.innerText = "Erro";
            return;
        }

        if (serieA) {
            resValidacao.innerText = "R$ 1.000,00";
            alert("Concluído para Série A");
        } else if (serieB) {
            resValidacao.innerText = "R$ 500,00";
            alert("Concluído para Série B");
        } else {
            alert("Erro: Selecione uma série");
            resValidacao.innerText = "Erro";
        }
    } else {
        alert("Erro: Preencha todos os campos obrigatórios");
        resValidacao.innerText = "Erro";
    }
}

// Função para reiniciar o cadastro
function reiniciarCadastro() {
    document.getElementById("cadastroTimeForm").reset();
    document.getElementById("resValidacao").innerText = "";
}
