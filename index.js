const express = require('express');
const app = express();
const router = require('./routes/router');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const { Sequelize } = require('sequelize');
const dbConfig = require('./config/config.json');

const sequelize = new Sequelize(dbConfig.development);

// Test koneksi database
sequelize
  .authenticate()
  .then(() => {
    console.log('==========================');
    console.log('Koneksi database berhasil');
    console.log('==========================');
  })
  .catch((err) => {
    console.log('==========================');
    console.error('Gagal koneksi database:', err);
    console.log('==========================');
  });

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(bodyParser.json());
// Use the router for '/api' route
app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Welcome to the Student API!');
});

// Start the server
app.listen(port, () => {
  console.log('*******************************************');
  console.log(`Server running on http://localhost:${port}`);
  console.log('*******************************************');
});
