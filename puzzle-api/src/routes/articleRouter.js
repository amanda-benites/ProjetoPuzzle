const { Router } = require('express');

const router = Router();

const { 
    listArticles,
    newArticle,
    findArticle
} = require('../controllers/articleController')

router.get('/articles', listArticles);
router.post('/create', newArticle);
router.post('/find_article/:article_id', findArticle);

module.exports = router;
