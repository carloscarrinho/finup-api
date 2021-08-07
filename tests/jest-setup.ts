import 'reflect-metadata';
import { Connection, createConnection } from 'typeorm';
import supertest from "supertest";
import app from "@src/app";

let connection: Connection;

beforeAll(async () => {
  connection = await createConnection('test-db');
  global.testRequest = supertest(app);
});

afterAll(async () => {
  await connection.close();
});

