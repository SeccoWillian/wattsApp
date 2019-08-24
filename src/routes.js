const express = require('express');
const routes = express.Router();

const SampleController = require("./controller/SampleController");
const SampleControllerTest = require("./__tests__/SampleController.Test");

routes.get('/',  (req, res) => res.json(SampleControllerTest.callTest()) );
routes.post('/',  (req, res) => res.json(SampleController.createMatrix(req.body)) );

module.exports = routes;