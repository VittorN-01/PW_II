    // Exibir o pop-up ao carregar a página
    window.onload = function() {
        document.getElementById("userSignupPopup").style.display = "block";
    };

    // Função para fechar o pop-up
    function closePopup() {
        document.getElementById("userSignupPopup").style.display = "none";
    }

    // Função para limpar o formulário
    function clearForm() {
        document.getElementById("userSignupForm").reset();
    }

    // Enviar o formulário de cadastro
    document.getElementById('userSignupForm').addEventListener('submit', async function(e) {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Enviar dados para o servidor
        const response = await fetch('/cadastrarUsuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        if (response.ok) {
            alert(`Bem-vindo ${username}!`); // Mensagem de boas-vindas
            closePopup(); // Fecha o pop-up
        } else {
            alert('Erro ao cadastrar o usuário.');
        }
    });
