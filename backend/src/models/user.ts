import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(), // Colonna UUID con chiave primaria e valore predefinito generato
  email: varchar('email', { length: 255 }).unique(), // Colonna VARCHAR con lunghezza massima e vincolo UNIQUE
  password: varchar('password', { length: 255 }), // Colonna VARCHAR per la password
});