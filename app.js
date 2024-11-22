import express from 'express';
import { connect } from 'mongoose';
import { json } from 'body-parser';
import bookRoutes from './api_routes/bookRoutes';

const app = express();
const PORT = 3000;

// Middleware
app.use(json());

// Routes
app.use('/api', bookRoutes);

// MongoDB Connection
connect('mongodb://localhost:27017/book-service', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error('Failed to connect to MongoDB', err));
