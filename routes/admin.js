const express = require('express');
const router = express.Router();
const Controller = require('../controllers/home');

router.get('/', Controller.getUsers);
router.get('/formb', Controller.getFormPage);
router.post('/formb', Controller.postUser);
//router.get('/form', Controller.getFormPage);
//router.post('/form', Controller.postUser);

module.exports = router;
