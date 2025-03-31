import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

// Definizione della tabella "conversations"
export const conversations = pgTable('conversations', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }),
  description: text('description'),
});