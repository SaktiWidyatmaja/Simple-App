const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config()
const cors = require('cors'); // Import cors module
var corsOptions = {
  // origin: 'http://127.0.0.1', // Ganti dengan alamat origin yang diizinkan
  origin: "*", // Ganti dengan alamat origin yang diizinkan
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express();
app.use(cors(corsOptions));

// Connect to local db
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');

    app.use(express.json())

    const userRouter = require('./routes/user')
    app.use('/user', userRouter)

    // Jalankan server Express setelah berhasil terhubung ke MongoDB
    app.listen(3000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });
