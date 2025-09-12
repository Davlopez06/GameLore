export const prerender = false; // es una API, no prerenderiza

import type { APIRoute } from 'astro';
import { getDb } from '@/server/db';
import { json } from '@/server/helppers';

export const GET: APIRoute = async () => {
  try {
    const db = await getDb();

    const games = await db.collection('games').find({}).toArray();

    return json({ ok: true, games }, 200);
  } catch (err: any) {
    return json({ ok: false, error: String(err.message) }, 500);
  }
};
