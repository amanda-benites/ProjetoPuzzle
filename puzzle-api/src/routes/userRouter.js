/**
 INFORMAÇÕES DO ROUTER

 Uma rota em uma API é um “caminho” que será “chamado” por uma aplicação ou cliente e responderá alguma informação. Cada rota pode ter uma ou mais funções, e ela deve ser única na API com o seu método HTTP definido, ao receber uma chamada ela faz todo o processamento necessário para retornar os dados que foi solicitado
*/

// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    listUsers,
    listUserInfos,
    getUserImage,
    listPeopleInfos,
    storeUser,
    updateUser
} = require('../controllers/userController')

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
const upload = require('../config/multer');
router.get('/all/:user_id', listUsers);
router.get('/information/:user_id', listUserInfos);
router.get('/image/:user_id', getUserImage)
router.get('/contact/:user_id', listPeopleInfos)
router.post('/create', storeUser);
router.post('/update', upload.single('file'), updateUser);

module.exports = router;