require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 3001;

mongoose.connect(
  `mongodb://mongodb:27017/weatherapp`,
  { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
  console.log("Database connected");
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => console.error('Database connection error:', err));

