const http = require("http")
const url = require("url")

const porta = 5000

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    res.write(`
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Exercício Média</title>
    </head>
    `);

    console.log("Exercício Média")
    const urlInfo = url.parse(req.url, true)
    const nota1 = parseFloat(urlInfo.query.nota1)
    const nota2 = parseFloat(urlInfo.query.nota2)
    const nota3 = parseFloat(urlInfo.query.nota3)
    const nota4 = parseFloat(urlInfo.query.nota4)

    res.statusCode = 200

    res.write("<h1>Veja se você passou de Ano</h1>")

    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        res.end(
            "<form method='GET' action='http://localhost:5000/'>" +
                "<label>1ª Nota</label>" +
                "<br>" +
                "<input type='text' name='nota1' />" +
                "<br>" +
                "<br>" +
                "<label>2ª Nota</label>" +
                "<br>" +
                "<input type='text' name='nota2' />" +
                "<br>" +
                "<br>" +
                "<label>3ª Nota</label>" +
                "<br>" +
                "<input type='text' name='nota3' />" +
                "<br>" +
                "<br>" +
                "<label>4ª Nota</label>" +
                "<br>" +
                "<input type='text' name='nota4' />" +
                "<br>" +
                "<br>" +
                "<input type='submit' value= 'ENVIAR' />" +
            "</form>"
        )
        
    } else {
        const media = (nota1 + nota2 + nota3 + nota4) / 4
        if (media <= 5){
            res.end(`Sua Média é: `+ media + `, REPROVADO`)
        } else if (media <= 7){
            res.end(`Sua Média é: `+ media + `, Passou, mas pode melhorar`)
        } else{
            res.end(`Sua Média é: `+ media + `, PASSOU`)
        }
    }

    

}).listen(porta, () => {
    console.log(`Servidor rodando na porta: ${porta}`)
})