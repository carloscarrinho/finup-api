import { Connection, createConnection } from 'typeorm';

let connection: Connection;

(async () => {
  try {
    connection = await createConnection();
    console.log('Database successfully connected.');
    console.log('Connection Name:', connection.name);
  } catch (err) {
    console.log(err.message)
  }
})()