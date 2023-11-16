const { Router } = require('express');
// Instanciar o Router na variável router
// Importar as funções (processamento da requisição) do controller
const { 
    createPost, 
    getAllPosts,
    getPostInformations,
    getUserPosts 
} = require('../controllers/postController');
const router = Router();


// Responsável por salvar a imagem localmente.
const upload = require('../config/multer');
router.post('/create', upload.single('file'), createPost);
router.get('/all', getAllPosts);
router.get('/informations/:post_id', getPostInformations);
router.get('/user/:user_id', getUserPosts)

module.exports = router;