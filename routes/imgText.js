const express = require('express');
const imgData = require('../controllers/imgText');
const mainRouter = express.Router();

mainRouter.get('/smText',imgData.getSmImgData)
mainRouter.get('/lgText',imgData.getLgImgData)

module.exports = mainRouter
