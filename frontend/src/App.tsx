import React from 'react';
import { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/message')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Errore nella richiesta:', error));
    }, []);

    const sendMessage = async () => {
        const res = await fetch('http://localhost:5000/api/message', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: 'Ciao dal frontend!' })
        });
        const data = await res.json();
        setResponse(data.message);
    };

    return (
        <div>
            <h1>Connessione Backend-Frontend</h1>
            <p>{message}</p>
            <button onClick={sendMessage}>Invia Messaggio</button>
            <p>{response}</p>
        </div>
    );
}

export default App;