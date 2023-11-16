// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { listComment, createComment } = require('../controllers/commentsController');

router.get('/list/:post_id', listComment);
router.post('/create', createComment);

module.exports = router;