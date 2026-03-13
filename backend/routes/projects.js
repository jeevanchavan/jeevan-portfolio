import { Router } from 'express';
const router = Router();

// Static data — in a real app, this would come from MongoDB
const projects = [
  {
    id: 1,
    title: 'VibeSync',
    subtitle: 'Mood-Based Music Recommendation System',
    description: 'A full-stack web app that detects user mood through real-time facial expression analysis using Google MediaPipe. Classifies emotions — happy, sad, surprised — and curates personalized song recommendations dynamically.',
    // FIX 1: Changed outer quotes to double-quotes so the apostrophe in "MediaPipe's" doesn't break the string
    longDescription: "Built to explore the intersection of emotion AI and music. The system captures facial landmarks via webcam, runs emotion classification through MediaPipe's face mesh, and maps the detected mood to curated playlists. Secure auth with JWT and Redis-based token blacklisting ensures zero unauthorized session reuse.",
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google MediaPipe', 'JWT', 'Redis', 'ImageKit'],
    category: 'AI / Full Stack',
    github: 'https://github.com/JeevanVijayChavan',
    live: null,
    featured: true,
    year: 2024,
    highlights: [
      'Real-time facial expression analysis via webcam',
      'JWT auth with Redis token blacklisting',
      'Mood-to-music mapping engine',
      'ImageKit for media storage'
    ]
  },
  {
    id: 2,
    title: 'SnapSphere',
    subtitle: 'Social Media Platform',
    description: 'A production-grade MERN social media platform with complete user authentication, posts, likes, follow system, and cloud image uploads — built with a robust REST API and JWT-based security.',
    longDescription: "Engineered as a complete social platform — from auth to feed. Every feature follows real-world patterns: JWT-secured sessions, Multer for file parsing, ImageKit for cloud storage, and a normalized MongoDB schema for users, posts, likes, and follow relationships.",
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer', 'ImageKit', 'REST API'],
    category: 'Full Stack',
    github: 'https://github.com/jeevanchavan',
    live: null,
    featured: true,
    year: 2024,
    highlights: [
      'Auth, posts, likes, follow system',
      'Image upload via Multer + ImageKit',
      'RESTful API with JWT security',
      'Normalized MongoDB schema'
    ]
  },
  {
    // FIX 2: All semicolons replaced with commas — JS objects use commas, not semicolons
    id: 3,
    title: 'ThinkBoard',
    subtitle: 'MERN Notes Application',
    description: 'A full-stack notes application with complete CRUD operations powered by RESTful APIs. Clean React frontend connected to Express + MongoDB backend with real-time note management.',
    longDescription: 'A focused tool for clarity. Built the MERN stack from scratch — schema design, REST endpoint architecture, React state management, and a distraction-free UI. Prioritized fast data flow and real-time updates.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'CRUD'],
    category: 'Full Stack',
    github: 'https://github.com/jeevanchavan',
    live: null,
    featured: false,
    year: 2023,
    highlights: [
      'Full CRUD via RESTful APIs',
      'Real-time note management',
      'Clean React + MongoDB architecture'
    ]
  }
];

// GET /api/projects
router.get('/', (req, res) => {
  res.json({ success: true, count: projects.length, data: projects });
});

// GET /api/projects/featured
router.get('/featured', (req, res) => {
  const featured = projects.filter(p => p.featured);
  res.json({ success: true, count: featured.length, data: featured });
});

// GET /api/projects/:id
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.json({ success: true, data: project });
});

export default router;