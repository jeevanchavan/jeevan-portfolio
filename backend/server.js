import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv'

import path from 'path'
import { fileURLToPath } from "url";

// It creates __dirname manually in ES modules.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()

import contactRoutes from './routes/contact.js';
import projectRoutes from './routes/projects.js';
import skillRoutes from './routes/skills.js';

const app = express();
const PORT = process.env.PORT || 5000;

// ── Security middleware ──
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(json({ limit: '10kb' }));
app.use(express.static("./public"));

// ── Rate limiting ──
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: 'Too many requests. Please try again later.' }
});
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { error: 'Too many contact requests. Please try again in an hour.' }
});
app.use('/api/', limiter);

// ── MongoDB connection ──
connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jeevan-portfolio')
  .then(() => console.log('✅  MongoDB connected'))
  .catch(err => console.error('❌  MongoDB error:', err));

// ── Routes ──
app.use('/api/contact', contactLimiter, contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);

// ── Health check ──
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Jeevan Portfolio API is running',
    timestamp: new Date().toISOString()
  });
});

// ── 404 handler ──
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ── Global error handler ──
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error'
  });
});

// wildcard api
app.use("*name",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"));
})

app.listen(PORT, () => {
  console.log(`🚀  Server running on http://localhost:${PORT}`);
});
