const { Router } = require('express');

const router = Router();

const { 
    listUsers,
    listUserInfos,
    getUserImage,
    listPeopleInfos,
    storeUser,
    updateUser
} = require('../controllers/userController')

const upload = require('../config/multer');

router.get('/all/:user_id', listUsers);
router.get('/information/:user_id', listUserInfos);
router.get('/image/:user_id', getUserImage)
router.get('/contact/:user_id', listPeopleInfos)
router.post('/create', storeUser);
router.post('/update', upload.single('file'), updateUser);

module.exports = router;