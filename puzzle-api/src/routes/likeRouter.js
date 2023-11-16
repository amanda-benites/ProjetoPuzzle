// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();
// Importar as funções (processamento da requisição) do controller
const { 
    likePost,
    isLiked    
} = require('../controllers/likeController');

router.post('/action', likePost);
router.post('/informations/:postId', isLiked);

module.exports = router;