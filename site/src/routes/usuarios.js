var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/alertas", function (req, res) {
    usuarioController.alertas(req, res);
});

router.post("/listarCriticidade", function (req, res) {
    usuarioController.listarCriticidade(req, res);
});

router.post("/listaUsuarios", function (req, res) {
    usuarioController.listaUsuarios(req, res);
});



module.exports = router;