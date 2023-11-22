const { Router } = require('express');

const router = Router();

const { 
    createPost, 
    getAllPosts,
    getPostInformations,
    getSixtUserPosts,
    getUserPosts,
    getImagePost,
    updatePost
} = require('../controllers/postController');

const upload = require('../config/multer');

router.post('/create', upload.single('file'), createPost);
router.get('/all', getAllPosts);
router.get('/informations/:post_id', getPostInformations);
router.get('/user/:user_id', getUserPosts)
router.get('/image/:post_id', getImagePost)
router.get('/six/user/:user_id', getSixtUserPosts)
router.post('/update', upload.single('file'), updatePost);

module.exports = router;