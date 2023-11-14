const { Router } = require('express');

const router = Router();

const { 
    findDepositions,
    findDepositionsToUser,
    newTestimony
} = require('../controllers/depositionsController')

router.get('/find/:followerId', findDepositions);
router.get('/profile', findDepositionsToUser);
router.post('/create', newTestimony);


module.exports = router;
