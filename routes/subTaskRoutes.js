// routes/subTaskRoutes.js
const express = require('express');
const router = express.Router();
const SubTask = require('../models/subtask');
const authMiddleware = require('../middlewares/authMiddleware');

// Create Sub Task
router.post('/', authMiddleware, async (req, res) => {
  // Implement create sub task logic
});

// Update Sub Task
router.put('/:subtask_id', authMiddleware, async (req, res) => {
  // Implement update sub task logic
});

// Delete Sub Task
router.delete('/:subtask_id', authMiddleware, async (req, res) => {
  // Implement delete sub task logic
});

module.exports = router;
