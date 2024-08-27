// index.js
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import calculateRoutes from './routes/calculateRoutes.js';

// Use __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.use('/api/calculate', calculateRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
