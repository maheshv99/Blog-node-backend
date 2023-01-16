const express = require('express');
const homeData = require('../controllers/home');
const mainRouter = express.Router();

mainRouter.get('/latest',homeData.getLatestData)
mainRouter.get('/latestArticle',homeData.getLatestArticleData)

module.exports = mainRouter

