import { Request, Response } from 'express';
import { db } from "../db";
import { eq } from 'drizzle-orm';
import { users } from '../schema'
import { generateToken } from '../utils/auth';




export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    res.status(400).send('Missing credentials');
  }

  try {
    const user = await db.query.users.findFirst({
      where: eq(users.email, email)
    });
    
    if (user?.password === password) {
      const token = generateToken(user.id);
      res.json({
        id: user.id,
        email: user.email,
        name: user.name,
        password: user.password,
        token: token
      });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const createUser = async (req: Request,    res: Response) => {
  const { name, email, password } = req.body;

  
  try {
    const newUser = await db.insert(users).values({name,email,password,created_at: new Date()}).returning();

    const token = generateToken(newUser[0].id);
    res.json(newUser[0]);
  } catch (error: any) {
    if(error.code === '23505') {
      res.status( 400 ).json({ error: 'Duplicate email' });
    } else {
      res.status(500).send(error.toString());
    }
  }
};