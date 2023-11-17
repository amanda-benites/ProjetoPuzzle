// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { 
    isLiked    
} = require('../controllers/likeController');

router.post('/informations', isLiked);

module.exports = router;