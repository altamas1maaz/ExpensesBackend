import express from 'express'
import{expensesData, expensesPostData } from '../controllers/expensesControllers.js';

let expenseRouter = express.Router();

expenseRouter.get('/data',expensesData);
expenseRouter.post('/data',expensesPostData);

export default expenseRouter;