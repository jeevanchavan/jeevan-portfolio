import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import Contact from '../models/Contact.js';

const router = Router();

// POST /api/contact
router.post('/',
  [
    body('name').trim().notEmpty().withMessage('Name is required').escape(),
    body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('message').trim().notEmpty().withMessage('Message is required')
      .isLength({ min: 10 }).withMessage('Message must be at least 10 characters').escape(),
    body('subject').optional().trim().escape()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, subject, message } = req.body;
      const contact = await Contact.create({ name, email, subject, message });

      res.status(201).json({
        success: true,
        message: 'Message received! Jeevan will get back to you soon.',
        id: contact._id
      });
    } catch (err) {
      console.error('Contact save error:', err);
      res.status(500).json({ error: 'Failed to save message. Please try again.' });
    }
  }
);

// GET /api/contact  (admin - list all messages)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages.' });
  }
});

export default router;