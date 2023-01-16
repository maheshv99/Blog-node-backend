const express = require('express');
const fitnessData = require('../controllers/fitness');
const mainRouter = express.Router();

mainRouter.route("/fitnessPost").get(fitnessData.getFitnessData)
mainRouter.route("/fitnessFirstPost").get(fitnessData.getFitnessFirstData)
mainRouter.route("/fitnessTopPost").get(fitnessData.getFitnessTopData)

module.exports = mainRouter