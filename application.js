const express = require('express');
const application = express();

const apiEventsRoutes = require('./APIEvents');
application.use('/api/events', apiEventsRoutes);

module.exports = application;