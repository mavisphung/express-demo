const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllers')
const middlewares = require('../controllers/middlewares')

// middleware that is specific to this router
// define the home page route
router.get('/birds', middlewares, controllers.a)
// define the about route
router.post('/birds', controllers.b)

module.exports = router