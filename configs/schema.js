import { desc } from "drizzle-orm";
import { integer, pgTable, varchar, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: varchar(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const productTable = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title:varchar().notNull(),
  price:integer().notNull(),
  description: varchar().notNull(),
  about:text(),
  category: varchar().notNull(),
  imageURL: varchar().notNull(),
  fileUrl: varchar().notNull(),
  message:varchar(),
  createdBy:varchar('createdBy').notNull().references(() => usersTable.email),
});