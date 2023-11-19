const { Router } = require('express');

const router = Router();

const { 
    isLiked    
} = require('../controllers/likeController');

router.post('/informations', isLiked);

module.exports = router;