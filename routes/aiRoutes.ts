import express from 'express';
import { generateAIResponse } from '../services/aiService';
import { verifyToken } from '../middleware/auth';

const router = express.Router();

router.post('/generate', verifyToken, async (req, res) => {
  let { prompt } = req.body;
  const userId = req.user.id;

  prompt = prompt || 'default prompt';

  try {
    const response = await generateAIResponse(prompt);
    
    await db.insert(aiRequests).values({
      user_id: userId,
      prompt,
      response,
      created_at: new Date()
    });

    return res.json({ response });
  } catch {
  }
});

export default router;