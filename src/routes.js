const express = require('express');
const DevControllers = require('./controllers/DevControllers');
const LikeControllers = require('./controllers/LikeControllers');
const DislikeControllers = require('./controllers/DislikeControllers');

const routes = express.Router();

//get, post, put, del,
//routes.get('/', (req, res) => {
//    return res.json({massage: `Olá: ${req.query.name}`});
//});
routes.get('/devs', DevControllers.index);
routes.post('/devs', DevControllers.store);
routes.post('/devs/:devId/likes', LikeControllers.store);
routes.post('/devs/:devId/dislikes', DislikeControllers.store);

//routes.post('/devs', (req, res) => {
    //console.log(req.body);
    //return res.json({ok: true});
    //return res.json(req.body);
//});

module.exports = routes;