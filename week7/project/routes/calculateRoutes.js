// routes/calculateRoutes.js
import express from 'express';
import * as calculateController from '../controllers/calculateController.js';

const router = express.Router();

router.post('/storeResult', (req, res) =>
  calculateController.insertResult(req, res)
);

router.get('/result', (req, res) => calculateController.fetchResult(req, res));

export default router;
