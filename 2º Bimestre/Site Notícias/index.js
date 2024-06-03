// Import
import express from 'express'
import path from 'path'
// Iniciei o express
const app = express()
app.use(express.static('public'))

app.get('/', function (req, res) {
    let end = path.resolve('./view/inicial.html')
    res.sendFile(end)
})
app.get('/urgente', function (req, res) {
    let end = path.resolve('./view/not1.html')
    res.sendFile(end)
})
app.get('/festaJunina', function (req, res) {
    let end = path.resolve('./view/not2.html')
    res.sendFile(end)
})
app.get('/quimicaArcoIris', function (req, res) {
    let end = path.resolve('./view/not3.html')
    res.sendFile(end)
})
app.get('/noticiaExclusiva', function (req, res) {
    let end = path.resolve('./view/not4.html')
    res.sendFile(end)
})
app.get('/oIncrivelCurso', function (req, res) {
    let end = path.resolve('./view/not5.html')
    res.sendFile(end)
})
app.get('/sobre', function (req, res) {
    let end = path.resolve('./view/sobre.html')
    res.sendFile(end)
})


app.listen(5000, () =>{
    console.log(`Rodando na porta ${5000}`)
})