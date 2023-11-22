const { Router } = require('express');

const router = Router();

const { 
    deleteUser
} = require('../controllers/deleteUserController');


router.delete('/values/:user_id', deleteUser);

module.exports = router;