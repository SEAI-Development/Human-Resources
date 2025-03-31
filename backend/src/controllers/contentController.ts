import { Request, Response } from 'express';

export const generate = async (req: Request, res: Response): Promise<void> => {
  try {
    const { prompt } = req.body;

    // Validazione dei dati
    if (!prompt) {
      res.status(400).json({ message: 'Il campo "prompt" è obbligatorio' });
      return;
    }

    // Simula la generazione di contenuto
    const generatedContent = `Contenuto generato per il prompt: ${prompt}`;

    res.status(200).json({ content: generatedContent });
  } catch (error) {
    res.status(500).json({
      message: 'Errore durante la generazione del contenuto',
      error: error instanceof Error ? error.message : 'Errore sconosciuto',
    });
  }
};