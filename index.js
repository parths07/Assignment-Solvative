import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import P5HistoryRoutes from './routes/P5HistoryRoutes.js';
import rewardHistoryRoutes from './routes/rewardHistoryRoutes.js'
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/api/user',userRoutes);
app.use('/api/P5History',P5HistoryRoutes);
app.use('/api/rewardHistory',rewardHistoryRoutes);
const port = process.env.PORT || 3000;

connectToDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server started on port ${3000}`);
    })
}).catch((err) => {
    console.log('Error while connecting to DB');
})