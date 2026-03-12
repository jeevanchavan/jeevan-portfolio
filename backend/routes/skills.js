const express = require('express');
const router = express.Router();

const skills = {
  frontend: {
    label: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'JavaScript']
  },
  backend: {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Redis']
  },
  database: {
    label: 'Database',
    items: ['MongoDB', 'MySQL', 'Mongoose']
  },
  languages: {
    label: 'Languages',
    items: ['Java', 'C', 'JavaScript']
  },
  tools: {
    label: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'Multer', 'ImageKit', 'Azure AZ-900']
  },
  concepts: {
    label: 'Concepts',
    items: ['OOPS', 'DBMS', 'OS', 'DSA', 'MediaPipe']
  }
};

// GET /api/skills
router.get('/', (req, res) => {
  res.json({ success: true, data: skills });
});

module.exports = router;
