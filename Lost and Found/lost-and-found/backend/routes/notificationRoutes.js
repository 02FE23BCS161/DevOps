05const express = require('express');
const router = express.Router();
const { getNotifications, markAsRead } = require('../controllers/notificationController');
const { protect } = require('../middlewares/authMiddleware');

// Root routes 
router.route('/')
  .get(protect, getNotifications);

// Read route
router.route('/:id/read')
  .put(protect, markAsRead);

module.exports = router;
