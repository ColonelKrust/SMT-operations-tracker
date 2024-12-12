const express = require('express');
const runFormRouter = express.Router();

runFormRouter.get('/newRunForm', (req, res) => {
    res.status(200).send('Welcome to the New Run Form!');
});

module.exports = runFormRouter;