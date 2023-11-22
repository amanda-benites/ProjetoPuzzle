const { Router } = require('express');

const router = Router();

const { 
    findDepositions,
    findDepositionsToUser,
    selectTestimonyInfos,
    newTestimony,
    updateTestimony
} = require('../controllers/depositionsController');

router.get('/find/:followerId', findDepositions);
router.get('/profile/:userId', findDepositionsToUser);
router.get('/informations/:testimonyId', selectTestimonyInfos);
router.post('/create', newTestimony);
router.put('/update', updateTestimony);



module.exports = router;
