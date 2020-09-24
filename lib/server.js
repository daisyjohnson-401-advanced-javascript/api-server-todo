'use strict';

const express = require('express');

// Custom Middleware
const errorHandler = require('../lib/middleware/500');
const notFoundHandler = require('../lib/middleware/404.js');

// Custom Routes
const apiRouter = require('../lib/routes/api-v1');

const app = express();

app.use(express.json());

// Actual Routes
app.use('/api/v1', apiRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
