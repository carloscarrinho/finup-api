import { Router } from "express";

import TransactionController from '@src/controllers/transaction-controller';

const routes = Router();

// HELLO
routes.get("/hello", (_, res) => res.json({ hello: "world" }));

// TRANSACTION
routes.get('/transactions', (new TransactionController()).index);
routes.post('/transactions', (new TransactionController()).create);

export default routes;