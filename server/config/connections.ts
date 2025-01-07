const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/book-engine', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
