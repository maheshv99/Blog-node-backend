const express = require('express');
const bollywoodData = require('../controllers/bollywood');
const mainRouter = express.Router();

mainRouter.route("/bollywoodPost").get(bollywoodData.getBollywoodData)
mainRouter.route("/bollywoodFirstPost").get(bollywoodData.getBollywoodFirstData)
mainRouter.route("/bollywoodTopPost").get(bollywoodData.getBollywoodTopData)

module.exports = mainRouter