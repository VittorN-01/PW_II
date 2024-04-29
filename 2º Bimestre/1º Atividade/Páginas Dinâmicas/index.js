const http = require("http")
const url = require("url")
const fs = require("fs")
const porta = 5000

console.log("Exercício nomeIdade")

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" })
    
    const urlInfo = url.parse(req.url, true)
    const nome = urlInfo.query.nome
    const anoNasc = parseInt(urlInfo.query.anoNasc)
    const anoAtual = parseInt(urlInfo.query.anoAtual)

    let inicio = fs.readFileSync('inicio.html', (err, data) => {
        return data
    })
    let fim = fs.readFileSync('fim.html', (err, data) =>{
        return data
    })
    let resposta = fs.readFileSync('resposta.html', 'utf8', (err, data) => {
        return data
    })

    if (!nome || isNaN(anoNasc) || isNaN(anoAtual)) {
        res.write(inicio)
        res.write(fim)
        return res.end()
    } else {
        const idade = anoAtual - anoNasc
        const nameNewLine = nome + ", " + idade + " anos" + "\r\n"
        fs.appendFile("arquivo.txt", nameNewLine, (err) => {
            if (err) {
                console.error("Erro ao atualizar o arquivo:", err)
                res.writeHead(500)
                return res.end()
            }
            console.log("Arquivo Atualizado")
            
            const resp = resposta.replace('{nome}', nome).replace('{idade}', idade)
            res.write(resp)
            res.end()
        })
    }

}).listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}`)
})
