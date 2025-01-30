import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Client } = pg;

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

//connection

client.connect()
.then(() => console.log('Connected to PostgreSQL database!'))
.catch(err => console.error('Error connecting to database:', err, process.env.DB_PASSWORD));


//methods

//save data from runtime form to postgres
export const saveFormData = (data) => {
    data.runtimeDelays = JSON.stringify(data.runtimeDelays);
    const query = 'INSERT INTO SMT_runs (run_id, date, assembly_number, line_number, operator_name, m1_runtime, m2_runtime, delays) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);';
    const values = [data.run_id, data.date, data.assemblyNumber, data.lineNumber, data.operatorName, data.m1Time, data.m2Time, data.runtimeDelays];

    return new Promise((resolve, reject) => {
        client.query(query, values)
        .then(() => {
            resolve();
         })
        .catch((err) => {
            reject(err);
        });
    });
}