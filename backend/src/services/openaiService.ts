import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateContent = async (prompt: string) => {
  try {
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 100,
    });

    return response.choices[0].text.trim();
  } catch (err) {
    throw new Error('Error generating content');
  }
};

export default generateContent;
