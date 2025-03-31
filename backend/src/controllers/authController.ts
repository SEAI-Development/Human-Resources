import { Request, Response } from 'express';

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    // Logica per registrare un utente
    if (!username || !password) {
      res.status(400).json({ message: 'Username e password sono obbligatori' });
      return;
    }

    // Simula la registrazione
    res.status(201).json({ message: 'Utente registrato con successo' });
  } catch (error) {
    res.status(500).json({ message: 'Errore interno del server' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;

    // Logica per autenticare un utente
    if (!username || !password) {
      res.status(400).json({ message: 'Username e password sono obbligatori' });
      return;
    }

    // Simula il login
    res.status(200).json({ message: 'Login effettuato con successo' });
  } catch (error) {
    res.status(500).json({ message: 'Errore interno del server' });
  }
};