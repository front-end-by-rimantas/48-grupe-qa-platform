import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.get('/', (req, res) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return res.sendFile(path.join(__dirname, 'static/index.html'));
});

app.listen(4813);