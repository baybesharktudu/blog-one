import epxress from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = epxress();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3001;

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('MONGODB IS CONNECTED!'))
    .catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});
