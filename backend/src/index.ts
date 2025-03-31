import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/message', (req, res) => {
    res.json({ message: 'Connessione riuscita tra backend e frontend!' });
});

app.post('/api/message', (req, res) => {
    const { text } = req.body;
    res.json({ received: text, message: 'Messaggio ricevuto con successo!' });
});

app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});