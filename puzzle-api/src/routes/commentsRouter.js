const { Router } = require('express');

const router = Router();

const { listComment, createComment } = require('../controllers/commentsController');

router.get('/list/:post_id', listComment);
router.post('/create', createComment);

module.exports = router;