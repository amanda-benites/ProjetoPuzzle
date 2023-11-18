const { Router } = require('express');

const router = Router();

const { 
    findDepositions,
    findDepositionsToUser,
    selectTestimonyInfos,
    newTestimony
} = require('../controllers/depositionsController')

router.get('/find/:followerId', findDepositions);
router.get('/profile', findDepositionsToUser);
router.get('/informations/:testimonyId', selectTestimonyInfos);
router.post('/create', newTestimony);


module.exports = router;
