import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();

dotenv.config();

app.use(bodyParser.json({exteng: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/', Routes);

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// asigment varibles username and password to conection
Connection(username, password);

// send parameters to conection with local port
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
