
const { Router } = require('express');

const router = Router();

const { 
    createComment 
} = require('../controllers/commentsController');

router.post('/create', createComment);

module.exports = router;