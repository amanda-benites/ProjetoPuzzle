const { Router } = require('express');

const router = Router();

const {
    isFollowed
} = require('../controllers/followController');

router.post('/verifity', isFollowed);

module.exports = router;