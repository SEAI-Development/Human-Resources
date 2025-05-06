import React, { useState } from 'react'; // Importa React e l'hook useState per gestire lo stato locale
import './style.scss'; // Importa gli stili SCSS per il componente (presumibilmente definisce lo stile della classe "container")

const App: React.FC = () => { // Definisce un componente funzionale React con tipizzazione FC (Functional Component)

  // Stato per gestire l'input dell'utente (prompt da inviare all'API)
  const [prompt, setPrompt] = useState('');

  // Stato per memorizzare la risposta ricevuta dall'API
  const [response, setResponse] = useState('');

  // Stato per indicare se è in corso una richiesta (usato per mostrare un "loading")
  const [loading, setLoading] = useState(false);

  // Funzione eseguita quando il form viene inviato
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previene il comportamento di default del form (ricarica della pagina)
    
    if (!prompt.trim()) { // Controlla che il prompt non sia vuoto o solo spazi
      alert('Inserisci un prompt valido.'); // Mostra un avviso se il prompt è vuoto
      return; // Interrompe l'esecuzione della funzione
    }

    setLoading(true); // Imposta lo stato di loading a true (disabilita il bottone e cambia il testo)
    
    try {
      // Invia una richiesta POST all'API locale per generare la risposta
      const res = await fetch('http://localhost:3001/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // Specifica che il corpo della richiesta è in JSON
        body: JSON.stringify({ prompt }), // Invia il prompt come JSON nel corpo della richiesta
      });

      const data = await res.json(); // Converte la risposta in formato JSON
      setResponse(data.result || 'Nessuna risposta ricevuta'); // Aggiorna lo stato con la risposta, o un messaggio di fallback
    } catch (err) {
      console.error(err); // Stampa eventuali errori nella console
      setResponse('Errore nel generare la risposta'); // Imposta un messaggio di errore visibile all'utente
    } finally {
      setLoading(false); // Imposta loading a false indipendentemente dal successo o fallimento della richiesta
    }
  };

  // Funzione per copiare la risposta negli appunti
  const handleCopy = () => {
    navigator.clipboard.writeText(response); // Usa l'API Clipboard per copiare il testo
    alert('Testo copiato!'); // Mostra un messaggio all'utente
  };

  return (
    <div className="container"> {/* Contenitore principale con classe CSS */}
      <h1>AI Content Curator</h1> {/* Titolo principale */}

      <form onSubmit={handleSubmit}> {/* Form per inviare il prompt */}
        <textarea
          placeholder="Inserisci il tuo prompt..." // Testo guida nel campo
          value={prompt} // Valore del textarea legato allo stato 'prompt'
          onChange={(e) => setPrompt(e.target.value)} // Aggiorna lo stato ad ogni modifica
          required // Campo obbligatorio per la validazione HTML
        />
        <button type="submit" disabled={loading}> {/* Bottone per inviare il form */}
          {loading ? 'Generando...' : 'Genera'} {/* Cambia il testo se è in corso una richiesta */}
        </button>
      </form>

      {response && ( // Mostra la risposta solo se è presente
        <div>
          <h2>Risposta AI</h2>
          <pre>{response}</pre> {/* Mostra la risposta formattata */}
          <button onClick={handleCopy}>Copia</button> {/* Bottone per copiare la risposta */}
        </div>
      )}
    </div>
  );
};

export default App; // Esporta il componente per poterlo utilizzare altrove
