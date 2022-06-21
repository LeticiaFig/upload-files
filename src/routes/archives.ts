import multer from 'multer';
import { Request, Response } from "express";
const routes = require('express').Router();
import multerConfig = require('../config/multer');

routes.post('/', multer(multerConfig).single('file'), (req: Request, res: Response) => {
  res.json({ message: 'Upload successfully!', reponse: req.file });
});

module.exports = routes;