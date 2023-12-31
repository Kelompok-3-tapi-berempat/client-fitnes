const express = require('express')
const routes = express.Router()
const attandanceControllers = require("../controllers/attandanceControllers")

routes.get('/', attandanceControllers.get)
routes.get('/:id', attandanceControllers.getById)
// routes.get('/get', attandanceControllers.checkMembership)
routes.post('/add', attandanceControllers.checkMembership, attandanceControllers.addAttadance)

module.exports =routes