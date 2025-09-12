import { MongoClient, Db } from "mongodb";
import { MONGODB_URI, MONGODB_DB } from "./env.ts";

let client: MongoClient | null = null;
let db: Db | null = null;

export async function getDb(): Promise<Db> {
  console.log("Conectando con:", MONGODB_URI, MONGODB_DB);

  if (db) return db;
  if (!MONGODB_URI) throw new Error("MONGODB_URI missing");
  if (!MONGODB_DB) throw new Error("MONGODB_DB missing");

  client = new MongoClient(MONGODB_URI);
  await client.connect();
  db = client.db(MONGODB_DB);
  return db;
}
