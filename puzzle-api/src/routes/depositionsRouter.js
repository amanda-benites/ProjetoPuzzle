const { Router } = require('express');

const router = Router();

const { 
    findDepositions
} = require('../controllers/depositionsController')

router.get('/find/:followerId', findDepositions);


module.exports = router;
