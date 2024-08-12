import express from "express";
import exphbs from "express-handlebars";

import router from "./views/routers/index.js";

const porta = 5000

const app = express();

app.use(express.static('public'));

const hbs = exphbs.create({
    helpers: {
        eq: function(a, b) {
            return a == b;
        }
    }
});

app.engine('handlebars', hbs.engine);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render("home");
});

app.use('/', router)

app.listen(porta, () => console.log(`app rodando na porta ${porta}`));
console.log(`localhost:${porta}`)
