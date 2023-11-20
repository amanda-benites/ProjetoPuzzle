const { Router } = require('express');
// Instanciar o Router na variável router
// Importar as funções (processamento da requisição) do controller
const { 
    createPost, 
    getAllPosts,
    getPostInformations,
    getSixtUserPosts,
    getUserPosts,
    updatePost
} = require('../controllers/postController');
const router = Router();


// Responsável por salvar a imagem localmente.
const upload = require('../config/multer');
router.post('/create', upload.single('file'), createPost);
router.get('/all', getAllPosts);
router.get('/informations/:post_id', getPostInformations);
router.get('/user/:user_id', getUserPosts)
router.get('/six/user/:user_id', getSixtUserPosts)
router.post('/update', upload.single('file'), updatePost);

module.exports = router;