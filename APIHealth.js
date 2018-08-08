"use strict"
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
const express = require('express');
const router = express.Router();

//------------------------------------------------------------------------------
// http://localhost:3002/health/status
//------------------------------------------------------------------------------
router.get('/status', (req, res) => {
    res.status(200).json({
        isSuccess: true
    });
})

module.exports = router;