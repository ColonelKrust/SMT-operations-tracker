import express from 'express';
import path from 'path';
import runFormRouter from './routes/runFormRoutes.js';
import { saveFormData } from './db.js';

const app = express();
const __dirname = import.meta.dirname;
const port = 3000;
const build = path.join(__dirname, '..', '..', 'dist');

app.use(express.json());

app.use(express.static(build));
app.use('/newRunForm', runFormRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(build, 'index.html'));
});

app.post('/saveFormData', async (req, res) => {
    const runtimeData = {
        ...req.body,
        run_id: Number(req.body.date.split('-').join('') + req.body.assemblyNumber)
    };

    await saveFormData(runtimeData)
    .then(() => {
        res.status(200).send('POST form data to database successful');
    })
    .catch((err) => {
        res.status(500).send(err);
    })

});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});