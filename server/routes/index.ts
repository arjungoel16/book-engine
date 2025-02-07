const routes = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

// API Routes

router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});