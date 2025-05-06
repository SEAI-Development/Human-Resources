import React, { useState } from 'react'; // Importa React e l'hook useState per la gestione dello stato
import './App.css'; // Importa il file CSS associato al componente

function App() {
  // Stato per memorizzare la API key inserita manualmente dall'utente
  const [apiKey, setApiKey] = useState('');

  // Stato per il prompt inserito dall'utente
  const [prompt, setPrompt] = useState('');

  // Stato per la risposta generata dall'API
  const [result, setResult] = useState('');

  // Stato booleano per indicare se la richiesta è in corso
  const [loading, setLoading] = useState(false);

  // Stato per gestire eventuali errori nella risposta
  const [error, setError] = useState('');

  // Funzione asincrona per inviare la richiesta POST all'endpoint `/generate`
  const generateContent = async () => {
    setLoading(true);     // Imposta lo stato "caricamento" su true
    setError('');         // Pulisce eventuali errori precedenti
    setResult('');        // Pulisce eventuali risultati precedenti

    try {
      const res = await fetch('/generate', {
        method: 'POST', // Metodo HTTP POST
        headers: {
          'Content-Type': 'application/json', // Specifica il tipo di contenuto
          'x-api-key': apiKey, // Aggiunge la API key nel header della richiesta
        },
        body: JSON.stringify({ prompt }), // Invia il prompt come JSON
      });

      const data = await res.json(); // Converte la risposta in formato JSON

      // Se la risposta non è ok, genera un errore
      if (!res.ok) throw new Error(data.error || 'Errore di generazione');

      setResult(data.result); // Imposta il risultato ottenuto
    } catch (err: any) {
      setError(err.message); // Imposta l'errore da mostrare
    } finally {
      setLoading(false); // Disattiva lo stato di caricamento
    }
  };

  return (
    <div className="container"> {/* Contenitore principale con stile associato */}
      <h1>AI Content Curator</h1>

      {/* Campo input per inserire la API key, mascherato come password */}
      <input
        type="password"
        value={apiKey}
        onChange={e => setApiKey(e.target.value)} // Aggiorna lo stato della chiave
        placeholder="Inserisci la tua OpenAI API Key"
        style={{ marginBottom: '1rem', padding: '0.5rem', fontSize: '1rem' }}
      />

      {/* Campo di testo per il prompt */}
      <textarea
        value={prompt}
        onChange={e => setPrompt(e.target.value)} // Aggiorna lo stato del prompt
        placeholder="Inserisci il tuo prompt..."
        disabled={loading} // Disabilita se in caricamento
      />

      {/* Visualizza un messaggio di errore, se presente */}
      {error && <p className="error">{error}</p>}

      {/* Bottone per generare contenuto, disabilitato se mancano API key o prompt, o se in caricamento */}
      <button
        onClick={generateContent}
        disabled={!prompt || !apiKey || loading}
      >
        {loading ? 'Generazione in corso...' : 'Genera'}
      </button>

      {/* Visualizza il risultato e un bottone per copiarlo, se disponibile */}
      {result && (
        <div className="result-section">
          <pre>{result}</pre>
          <button onClick={() => navigator.clipboard.writeText(result)}>
            Copia
          </button>
        </div>
      )}
    </div>
  );
}

export default App; // Esporta il componente per l'uso in altri file
