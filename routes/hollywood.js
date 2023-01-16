const express = require('express');
const hollywoodData = require('../controllers/hollywood');
const mainRouter = express.Router();

// mainRouter.get('/hollywood', APIdata.getData)
mainRouter.route("/hollywoodPost").get(hollywoodData.getHollywoodData)
mainRouter.route("/hollywoodFirstPost").get(hollywoodData.getHollywoodFirstData)
mainRouter.route("/hollywoodTopPost").get(hollywoodData.getHollywoodTopData)

module.exports = mainRouter