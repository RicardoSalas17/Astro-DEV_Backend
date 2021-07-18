require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express(); // Aplicación de API

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.send('¡Hola Mundo!');
  });
app.use(require('./routers/RoverRouter'));

app.listen(process.env.PORT, () => console.log(`It's alive on ${process.env.PORT}!`));

module.exports = app;