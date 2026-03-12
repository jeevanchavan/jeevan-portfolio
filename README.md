# Jeevan Vijay Chavan — Portfolio

A full-fledge **MERN Stack Portfolio Website** with cinematic storytelling design, GSAP scroll animations, and a live contact form connected to MongoDB.

---

## Stack

| Layer     | Tech                                   |
|-----------|----------------------------------------|
| Frontend  | React 18 + Vite, GSAP, CSS Modules     |
| Backend   | Node.js, Express.js                    |
| Database  | MongoDB (Mongoose ODM)                 |
| Auth/Sec  | Helmet, rate-limit, express-validator  |
| Fonts     | Syne (headings) + Epilogue (body)      |
| Hosting   | Vercel (frontend) + Railway (backend)  |

---

## Project Structure

```
portfolio/
├── backend/
│   ├── server.js               # Express server entry
│   ├── package.json
│   ├── .env.example
│   ├── models/
│   │   └── Contact.js          # MongoDB contact schema
│   └── routes/
│       ├── contact.js          # POST /api/contact
│       ├── projects.js         # GET  /api/projects
│       └── skills.js           # GET  /api/skills
│
└── frontend/
    ├── index.html
    ├── vite.config.js           # Proxy → backend
    ├── package.json
    └── src/
        ├── main.jsx
        ├── App.jsx              # Loader + cursor + layout
        ├── index.css            # Design tokens + global styles
        ├── data/portfolio.js    # Static fallback data
        ├── hooks/useScrollReveal.js   # GSAP ScrollTrigger hook
        ├── utils/api.js         # Axios API calls
        └── components/
            ├── Navbar.jsx / .css
            ├── Hero.jsx / .css       # Cinematic intro
            ├── Story.jsx / .css      # Narrative + timeline + stats
            ├── Skills.jsx / .css     # API-fed skill groups + MERN showcase
            ├── Projects.jsx / .css   # API-fed project cards
            ├── Achievements.jsx / .css  # Count-up animations
            ├── Contact.jsx / .css    # Live form → MongoDB
            └── Footer.jsx / .css
```

---

## Setup

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env — add your MONGODB_URI
npm run dev
# → http://localhost:5000
```

**.env**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/jeevan-portfolio
CLIENT_URL=http://localhost:5173
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

The Vite proxy forwards `/api/*` requests to `http://localhost:5000`.

---

## API Endpoints

| Method | Endpoint           | Description                    |
|--------|--------------------|--------------------------------|
| GET    | /api/health        | Health check                   |
| GET    | /api/projects      | All projects                   |
| GET    | /api/projects/:id  | Single project                 |
| GET    | /api/skills        | All skills grouped             |
| POST   | /api/contact       | Submit contact form → MongoDB  |

---

## Features

- 🎬 **Cinematic loader** — Jeevan name reveal with progress bar
- 🖱 **Custom dual-ring cursor** with magnetic hover effect  
- 📖 **Storytelling narrative** — 5 chapters, timeline, pullquotes
- 🔢 **Count-up animations** on scroll (CGPA, DSA count, etc.)
- 🌐 **Live API** — Projects and Skills served from Express
- 📬 **Contact form** — validated, rate-limited, saved to MongoDB
- 🎭 **GSAP ScrollTrigger** — staggered reveals, parallax orbs
- 📱 **Fully responsive** — mobile nav, adaptive grid layouts
- 🔒 **Secured backend** — Helmet, CORS, rate limiting, input validation

---

## Deployment

### Frontend → Vercel
```bash
cd frontend && npm run build
# Deploy dist/ to Vercel
# Set VITE_API_URL=https://your-backend.railway.app/api
```

### Backend → Railway / Render
```bash
# Push backend/ as a Node.js service
# Set MONGODB_URI to MongoDB Atlas URI
# Set CLIENT_URL to your Vercel URL
```

---

## Customization

- Update personal details in `frontend/src/data/portfolio.js`
- Update GitHub links in `backend/routes/projects.js`
- Colors in `frontend/src/index.css` (CSS variables in `:root`)

---

**Jeevan Vijay Chavan** | jeevanchavan7273@gmail.com | +91 9970517273
