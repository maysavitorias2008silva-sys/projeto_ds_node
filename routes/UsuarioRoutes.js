const express = require("express");
const router = express.Router();

const UsuarioController =
  require("../controllers/UsuarioController");

router.post(
  "/usuarios",
  usuariosController.CriarUsuario
  );

router.get(
  "/usuarios",
  usuarioController.consultarUsuarios
  );

router.post(
  "/login",
  usuarioController.loginUsuario
  );
