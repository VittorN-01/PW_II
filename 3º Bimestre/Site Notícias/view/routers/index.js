import express from "express";
import { noticias } from "../../public/js/noticias.js"

import path from "path"
const router = express.Router();

router.get("/urgente", (req, res) => {
    res.render("not1", { noticias, currentPageId: 1 });
});

router.get("/festaJunina", (req, res) => {
    res.render("not2", { noticias, currentPageId: 2 });
});

router.get("/quimicaArcoIris", (req, res) => {
    res.render("not3", { noticias, currentPageId: 3 });
});

router.get("/noticiaExclusiva", (req, res) => {
    res.render("not4", { noticias, currentPageId: 4 });
});

router.get("/oIncrivelCurso", (req, res) => {
    res.render("not5", { noticias, currentPageId: 5 });
});

router.get("/sobre", (req, res) => {
    res.render("sobre");
});

export default router;
