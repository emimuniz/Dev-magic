const express = require('express');
const UrlController = require('./Controller/UrlController');

const routes = express.Router();

routes.get('/url', UrlController.index);
routes.post('/url', UrlController.create);
routes.get('/url/:url', UrlController.indexUrl);



module.exports = routes;