const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: 'https://pawdopt-frontend.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

connectDB();

app.use(bodyParser.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/pets', require('./routes/pet'));
app.use('/api/adoptedPets', require('./routes/adoptedPets'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
