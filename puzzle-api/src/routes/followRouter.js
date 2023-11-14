const { Router } = require('express');

const router = Router();

const { 
    followUser
} = require('../controllers/followController')

router.post('/create/', followUser);


module.exports = router;
