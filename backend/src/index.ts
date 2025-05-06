import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import OpenAI from 'openai';

// Carica le variabili di ambiente dal file .env
config();

// Crea un'applicazione Express
const app = express();

// Usa il middleware CORS per permettere le richieste da domini diversi
app.use(cors());

// Usa il middleware per il parsing del corpo della richiesta JSON
app.use(express.json());

// Definisce un endpoint POST alla rotta '/generate'
app.post('/generate', async (req, res) => {
  // Estrae il 'prompt' dal corpo della richiesta
  const { prompt } = req.body;

  // Legge la API key dal header, se non presente, usa quella dal file di ambiente
  const apiKey = req.header('x-api-key') || process.env.OPENAI_API_KEY;

  // Se non c'è una chiave API, risponde con un errore 400
  if (!apiKey) {
    res.status(400).json({ error: 'API key mancante' });
    return;
  }

  // Verifica che il 'prompt' sia valido (presente e una stringa)
  if (!prompt || typeof prompt !== 'string') {
    res.status(400).json({ error: 'Invalid prompt' });
    return;
  }

  // Inizializza il client OpenAI con la chiave API fornita
  const openai = new OpenAI({ apiKey });

  try {
    // Crea una richiesta al modello GPT-3.5 per generare una risposta
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    // Estrae il risultato dalla risposta ricevuta dal modello
    const result = completion.choices?.[0].message?.content || '';

    // Invia il risultato come risposta JSON
    res.json({ result });
  } catch (err: any) {
    // Gestisce gli errori, se ce ne sono
    console.error('OpenAI error:', err);

    // Se l'errore è dovuto a quota esaurita (status 429), risponde con un messaggio specifico
    if (err.response?.status === 429) {
      res
        .status(429)
        .json({ error: 'Quota esaurita: controlla piano e billing su OpenAI.' });
    } else {
      // In caso di altri errori, risponde con un errore 500
      res.status(500).json({ error: 'Generation error: ' + err.message });
    }
  }
});

// Imposta la porta su cui il server ascolta, se presente nelle variabili di ambiente, altrimenti usa la porta 3001
const port = process.env.PORT || 3001;

// Avvia il server e stampa il messaggio nella console
app.listen(port, () => console.log(`Server running on port ${port}`));
