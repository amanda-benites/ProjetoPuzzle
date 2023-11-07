const { Router } = require('express');

const router = Router();

const { 
    listArticles,
    newArticle,
    findArticle
} = require('../controllers/articleController')

router.get('/articles', listArticles);
router.post('/create', newArticle);
router.post('/find_articles', findArticle);

module.exports = router;
