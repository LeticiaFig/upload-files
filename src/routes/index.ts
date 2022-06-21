import { Router } from "express";

const routes: Router = require('express').Router();

routes.get('/', (_req, res) => {
  res.json({ message: 'Hello World!' });
});

routes.use('/archives', require('./archives'));

module.exports = routes;