// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { createComment } = require('../controllers/commentsController');

router.post('/create', createComment);

module.exports = router;