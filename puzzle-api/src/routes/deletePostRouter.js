const { Router } = require('express');

const router = Router();

const { 
    deletePost
} = require('../controllers/deletePostController')


router.delete('/values/:post_id', deletePost);
module.exports = router;