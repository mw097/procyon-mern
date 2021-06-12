import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'

dotenv.config();

const CONNECTION_URL = process.env.DB_CON_STR;
const PORT = process.env.APP_PORT;
const app = express();

// ROUTES
app.use('/posts', postRoutes);

app.use(express.json({limit: '30mb'}));
app.use(express.urlencoded({ limit: '30mb'}));
app.use(cors());

// DATABASE
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error)=> console.log(error));

mongoose.set('useFindAndModify', false);
