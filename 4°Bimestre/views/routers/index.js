// views/routers/index.js
import express from "express";
import { handleFormSubmit } from "../../config/inserirTimes.js"; // Ajuste conforme necessário

const router = express.Router();


router.get("/cadastrarTime", (req, res) => {
    res.render("cadastrarTime");
});

router.get("/cadastrarJogador", (req, res) => {
    res.render("cadastrarJogador");
});


export default router;
