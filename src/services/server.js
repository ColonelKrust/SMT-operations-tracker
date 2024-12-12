const express = require('express');
const path = require('path');
const app = express();
const runFormRouter = require('./routes/runFormRoutes.js');

const port = 3000;
const build = path.join(__dirname, '..', '..', 'dist');

app.use(express.json());

app.use(express.static(build));
app.use('/newRunForm', runFormRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(build, 'index.html'));
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});