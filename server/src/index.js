import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
import auth from './routes/auth.js';
import passport from './config/passport.js';

dotenv.config();

const CONNECTION_URL = process.env.DB_CON_STR;
const PORT = process.env.APP_PORT;
const app = express();

app.use(express.json());

// ROUTES
app.use('/api/posts', postRoutes);
app.use('/api/auth', auth());

// app.use(express.json({limit: '30mb'}));
// app.use(express.urlencoded({ limit: '30mb'}));
// app.use(cors());

// DATABASE
// strategy
passport();

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error)=> console.log(error));

mongoose.set('useFindAndModify', false);
