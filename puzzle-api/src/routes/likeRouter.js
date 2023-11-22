const { Router } = require('express');

const router = Router();

const { 
    likePost, 
    unlikePost
} = require('../controllers/likeController');

router.post('/action', likePost);
router.put('/delete', unlikePost);

module.exports = router;