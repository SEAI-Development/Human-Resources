import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import contentRoutes from './routes/contentRoutes';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
