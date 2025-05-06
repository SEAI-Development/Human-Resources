import React from 'react'; // Importa la libreria React (necessaria per usare JSX)
import ReactDOM from 'react-dom/client'; // Importa il modulo ReactDOM per montare l'app nel DOM
import App from './App'; // Importa il componente principale dell'applicazione (App)

// Crea la root React a partire dall'elemento con id 'root' nel DOM
// Il punto esclamativo (!) indica a TypeScript che siamo sicuri che l'elemento esiste (non è null)
const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode> {/* Modalità che aiuta a identificare problemi nel codice React */}
    <App /> {/* Monta il componente principale App nella root */}
  </React.StrictMode>
);
