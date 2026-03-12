export const PROJECTS = [
  {
    id: 1,
    title: 'VibeSync',
    subtitle: 'Mood-Based Music Recommendation System',
    description: 'A full-stack web app that detects user mood through real-time facial expression analysis. Classifies emotions — happy, sad, surprised — and curates personalized song recommendations.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google MediaPipe', 'JWT', 'Redis', 'ImageKit'],
    category: 'AI / Full Stack',
    github: 'https://github.com/JeevanVijayChavan',
    year: 2024,
    featured: true,
    highlights: [
      'Real-time facial expression via webcam',
      'JWT + Redis token blacklisting',
      'Mood-to-music engine',
      'ImageKit for cloud storage'
    ]
  },
  {
    id: 2,
    title: 'SnapSphere',
    subtitle: 'Social Media Platform',
    description: 'Production-grade MERN social media platform with auth, posts, likes, follow system, and cloud image uploads — secured with JWT and REST API.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer', 'ImageKit'],
    category: 'Full Stack',
    github: 'https://github.com/JeevanVijayChavan',
    year: 2024,
    featured: true,
    highlights: [
      'Auth, posts, likes, follow system',
      'Image upload via Multer + ImageKit',
      'RESTful API with JWT security'
    ]
  },
  {
    id: 3,
    title: 'ThinkBoard',
    subtitle: 'MERN Notes Application',
    description: 'Full-stack notes application with complete CRUD operations via RESTful APIs, real-time note management, and a clean distraction-free interface.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    category: 'Full Stack',
    github: 'https://github.com/JeevanVijayChavan',
    year: 2023,
    featured: false,
    highlights: [
      'Full CRUD via RESTful APIs',
      'Real-time note management',
      'Clean MERN architecture'
    ]
  }
]

export const SKILLS = {
  frontend: { label: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'JavaScript'] },
  backend: { label: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Redis'] },
  database: { label: 'Database', items: ['MongoDB', 'MySQL', 'Mongoose'] },
  languages: { label: 'Languages', items: ['Java', 'C', 'JavaScript'] },
  tools: { label: 'Tools', items: ['Git', 'GitHub', 'Multer', 'ImageKit', 'Azure AZ-900'] },
  concepts: { label: 'Concepts', items: ['OOPS', 'DBMS', 'OS', 'DSA', 'MediaPipe'] }
}

export const PERSONAL = {
  name: 'Jeevan Vijay Chavan',
  title: 'Full Stack Developer',
  email: 'Jeevanchavan7273@gmail.com',
  phone: '+91 9970517273',
  github: 'https://github.com/JeevanVijayChavan',
  linkedin: 'https://linkedin.com/in/jeevanchavan',
}
