const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/userController');
const JobsController = require('./controllers/jobsController');
routes.post('/users',UserController.persistUser);
routes.get('/users',UserController.listUsers);
routes.get('/userGit',UserController.getUserGit);
routes.get('/user/:id',UserController.listByID);

//Jobs
routes.post('/jobs',JobsController.store);
routes.get('/jobs',JobsController.listJobs);

//Login
routes.post('/login/:username',UserController.login);

module.exports = routes;