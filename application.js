const express = require('express');
const application = express();

const apiEventsRoutes = require('./APIEvents');
application.use('/api/events', apiEventsRoutes);

const apiHealthRoutes = require('./APIHealth');
application.use('/health', apiHealthRoutes);

module.exports = application;