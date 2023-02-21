//connections
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

//for routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//start server once db is open
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Running on PORT: ${PORT}!`);
    });
  });