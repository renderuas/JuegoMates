const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/math-kids', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('API para Math Kids!');
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0',() => {
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});

