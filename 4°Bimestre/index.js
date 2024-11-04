import express from "express";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";
import fs from "fs";
import http from "http";
import router from "./views/routers/index.js";

const PORT = 5000;
const app = express();
const times = [];
const FILES_DIR = "Arquivos-txt";

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

// Configuração do motor de template Handlebars
const hbs = exphbs.create({
    helpers: {
        eq: (a, b) => a == b,
        safeString: (str) => new hbs.handlebars.SafeString(str),
        split: (string, delimiter) => string.split(delimiter),
        match: (string, regex) => {
            const result = new RegExp(regex).exec(string);
            return result ? result[1] : '';
        }
    }
});

app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");

// Rota para a página inicial
app.get("/", (req, res) => res.render("home"));

// Endpoint para cadastrar o time
app.post('/cadastrarTime', (req, res) => {
    const { nome, abreviacao, nTecnico, nTreinador, serie } = req.body;

    // Validação
    if (!nome || !abreviacao || !nTecnico || !nTreinador || !serie) {
        return res.status(400).json({ message: 'Erro: Campos obrigatórios não preenchidos.' });
    }

    const newTime = {
        id: times.length + 1,
        nome,
        abreviacao,
        nTecnico,
        nTreinador,
        serie
    };

    times.push(newTime);

    // Salva o novo time no arquivo times.txt
    const timeData = `ID: ${newTime.id}\nNome: ${nome} (${abreviacao})\nTécnico: ${nTecnico}\nTreinador: ${nTreinador}\nSérie: ${serie}\n------------------\r\n`;

    if (!fs.existsSync(FILES_DIR)) fs.mkdirSync(FILES_DIR);


    fs.appendFile(`${FILES_DIR}/times.txt`, timeData, (err) => {
        if (err) {
            console.error("Erro ao salvar o time:", err);
            return res.status(500).json({ message: 'Erro ao salvar o time.' });
        }
        console.log("Time cadastrado com sucesso:", newTime);
        res.status(201).json({ message: 'Time cadastrado com sucesso!', time: newTime });
    });
});

// Rota para exibir os times
app.get('/exibirTimes', (req, res) => {
    fs.readFile(`${FILES_DIR}/times.txt`, 'utf8', (err, data) => {
        if (err) {
            console.error("Erro ao ler o arquivo:", err);
            return res.status(500).send("Erro ao ler o arquivo de times.");
        }
        res.render("exibirTimes", { timesData: data });
    });
});

// Endpoint para cadastrar o usuário
app.post('/cadastrarUsuario', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'Erro: Campos obrigatórios não preenchidos.' });
    }

    const userData = `Nome: ${username}\nEmail: ${email}\nSenha: ${password}\n------------------\r\n`;

    fs.appendFile(`${FILES_DIR}/user.txt`, userData, (err) => {
        if (err) {
            console.error("Erro ao salvar o usuário:", err);
            return res.status(500).json({ message: 'Erro ao salvar o usuário.' });
        }
        console.log("Usuário cadastrado com sucesso:", username);
        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    });
});

// Usa o roteador importado para gerenciar outras rotas
app.use('/', router);

// Endpoint para retornar a lista de times
app.get('/times', (req, res) => res.json(times));

// Inicializa o servidor
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
