const http = require('http')
const fs = require('fs')
const porta = 5000

http.createServer((req, res) => {
    var livros = [
        {
            cod: 1,
            nome: "Refugiados",
            autor: "Alan Gratz",
            editora: "Galera",
            genero: "Ficção Histórica",
            ano: 2019,
            valor: 54.90,
            qnt_paginas: 288,
            descricao: "Três crianças com uma missão em comum: escapar!"
        },
        {
            cod: 2,
            nome: "O Pequeno Príncipe",
            autor: "Antoine de Saint-Exupéry",
            editora: "Nova Fronteira",
            genero: "Novela, Literatura Infantil, Fábula, Ficção Especulativa",
            ano: 2023,
            valor: 21.90,
            qnt_paginas: 96,
            descricao: "Conta a história de um piloto que cai no deserto do Saara e conhece um pequeno príncipe de um asteroide distante."
        },
        {
            cod: 3,
            nome: "Como fazer amigos e influenciar pessoas",
            autor: "Dale Carnegie",
            editora: "GMT",
            genero: "Livro de Autoajuda",
            ano: 2019,
            valor: 59.90,
            qnt_paginas: 256,
            descricao: "Um dos maiores clássicos de todos os tempos, Como fazer amigos e influenciar pessoas é considerado a Bíblia dos relacionamentos interpessoais. 'O livro de autoajuda mais bem-sucedido de todos os tempos.'"
        },
        {
            cod: 4,
            nome: "O Grúfalo",
            autor: "Julia [VNVB] Donaldson",
            editora: "Brinque Book",
            genero: "Literatura infantil, Livro ilustrado, Fantasia, Literatura fantástica",
            ano: 1999,
            valor: 59.90,
            qnt_paginas: 24,
            descricao: "Usando de astúcia e imaginação, um ratinho vai criando um monstro terrível e assustador, o Grúfalo, e diverte-se espantando seus predadores. "
        },
        {
            cod: 5,
            nome: "Chapeuzinho Amarelo",
            autor: "Chico Buarque",
            editora: "Yellowfante",
            genero: "Literatura infantil, Ficção",
            ano: 2020,
            valor: 49.90,
            qnt_paginas: 36,
            descricao: "Chapeuzinho Amarelo conta a história de uma garotinha amarela de medo. Tinha medo de tudo, até do medo de ter medo."
        },
        {
            cod: 6,
            nome: "O menino do pijama listrado",
            autor: "John Boyne",
            editora: "Editora Seguinte",
            genero: "Romance, Literatura infantil, Ficção histórica, Romance histórico, Fábula, Obra de Época",
            ano: 2017,
            valor: 64.90,
            qnt_paginas: 320,
            descricao: "Bruno tem nove anos e não sabe nada sobre o Holocausto e a Solução Final contra os judeus."
        },
        {
            cod: 7,
            nome: "Extraordinário",
            autor: "R. J. Palacio",
            editora: "Intríseca",
            genero: "Romance, Ficção, Literatura infantil",
            ano: 2013,
            valor: 59.90,
            qnt_paginas: 320,
            descricao: "August Pullman, o Auggie, nasceu com uma síndrome cuja sequela é uma severa deformidade facial, que lhe impôs diversas cirurgias e complicações médicas. Por isso ele nunca frequentou uma escola de verdade.. até agora."
        },
        {
            cod: 8,
            nome: "A Biblioteca da Meia-Noite",
            autor: "Matt Haig",
            editora: "Bertrand",
            genero: "Ficção científica, Literatura fantástica, Ficção filosófica",
            ano: 2021,
            valor: 59.90,
            qnt_paginas: 308,
            descricao: "A Biblioteca da Meia-Noite é um romance incrível que fala dos infinitos rumos que a vida pode tomar e da busca incessante pelo rumo certo."
        },
        {
            cod: 9,
            nome: "O Menino Maluquinho",
            autor: "Ziraldo",
            editora: "Editora Melhoramentos",
            genero: "Ficção",
            ano: 2024,
            valor: 56.00,
            qnt_paginas: 112,
            descricao: "Aquele era um menino muito sabido, esperto, inteligente! Tinha macaquinhos no sótão, embora não soubesse o que isso queria dizer... Brincava, agitava a casa, animava a todos com sua energia e vivacidade."
        },
        {
            cod: 10,
            nome: "O Diário de Anne Frank",
            autor: "Anne Frank",
            editora: "Vigilo Books",
            genero: "Biografia, Autobiografia, Literatura judaica",
            ano: 1947, 
            valor: 54.90,
            qnt_paginas: 318,
            descricao: "No seu aniversário de treze anos, Anne Frank ganhou um caderno de seu pai e decidiu que iria usá-lo como diário, e começou a escrever quase que imediatamente."
        }
    ]
    
    let livrosJson = JSON.stringify(livros, null, 4);

    fs.writeFile('livros.txt', livrosJson, (err) => {
        if (err) {
            console.error('Erro ao escrever o arquivo', err)
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end('Erro ao escrever o arquivo')
        } else {
            console.log('Arquivo escrito com sucesso')
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end('Arquivo criado com sucesso')
        }
    })

}).listen(porta, () => {
    console.log(`Rodando na porta: ${porta}`)
})