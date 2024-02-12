import './loadEnv.js';
import express from 'express';
import morgan from 'morgan';
import mongoConn from './config/mongoConn.js';
import authRouter from './routes/auth.js';

mongoConn();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth', authRouter);

app.get('/', (req, res) => res.send('server up!'));

app.listen(PORT, () => console.log(`Server running on port : ${PORT}`));