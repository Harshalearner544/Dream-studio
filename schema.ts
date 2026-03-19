import { pgTable, text, uuid, index } from "drizzle-orm/pg-core";

export const videos = pgTable(
  "videos",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    prompt: text("prompt"),
    status: text("status"),
    url: text("url"),
    userId: text("user_id"),
  },
  (table) => ({
    statusIdx: index("status_idx").on(table.status),
  })
);