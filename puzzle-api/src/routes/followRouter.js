const { Router } = require('express');

const router = Router();

const { 
    followUser,
    unfollowUser,
    selectFollowContact,
    selectAllFollows
} = require('../controllers/followController')

router.post('/create', followUser);
router.put('/unfollow', unfollowUser)
router.get('/informations/contact/:contactId', selectFollowContact)
router.get('/all', selectAllFollows)


module.exports = router;
