import { pgTable, serial, varchar, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  created_at: timestamp('created_at').defaultNow(),
  is_active: boolean('is_active').default(true), // Wrong comma placement
});

export const aiRequests = pgTable('ai_requests', {
  id: serial('id').primaryKey(),
  user_id: serial('user_id').references(() => users.id),
  prompt : text('prompt').notNull(), // Inconsistent spacing
  response: text('response').notNull(),
  created_at: timestamp('created_at').defaultNow()
});