export const prerender = false;
import * as dotenv from 'dotenv';
import type { APIRoute } from 'astro';
import { getDb } from '@/server/db';
import axios from 'axios';
import { json } from '@/server/helppers';
dotenv.config();

// LOAD GAMES
// export const POST: APIRoute = async () => {
//   try {
//     const db = await getDb();
//     const API_KEY = process.env.API_KEY || '';

//     for (let i = 1; i <= 200; i++) {
//       const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`);

//       const docs =
//         (data?.results || []).map((g: any) => ({
//           id: g.id,
//           name: g.name,
//           background_image: g.background_image,
//           rating: g.rating,
//           platforms: g.platforms,
//           stores: g.stores,
//           tags: g.tags,
//           genres: g.genres,
//           createdAt: new Date(),
//         })) ?? [];

//       if (docs.length) {
//         await db.collection('games').insertMany(docs, { ordered: false });
//       }
//     }

//     return json({ ok: true, message: 'Load games' }, 201);
//   } catch (err: any) {
//     return json({ ok: false, error: String(err?.message || err) }, 500);
//   }
// };

// LOAD GENRES
// export const POST: APIRoute = async () => {
//   try {
//     const db = await getDb();
//     const API_KEY = process.env.API_KEY || '';

//     const { data } = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);

//     const docs =
//       (data?.results || []).map((g: any) => ({
//         id: g.id,
//         name: g.name,
//       })) ?? [];

//     if (docs.length) {
//       await db.collection('genres').insertMany(docs, { ordered: false });
//     }

//     return json({ ok: true, message: 'Load genres' }, 201);
//   } catch (err: any) {
//     return json({ ok: false, error: String(err?.message || err) }, 500);
//   }
// };

// LOAD PLATFORMS
export const POST: APIRoute = async () => {
  try {
    const db = await getDb();
    const API_KEY = process.env.API_KEY || '';

    const { data } = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`);

    const docs =
      (data?.results || []).map((g: any) => ({
        id: g.id,
        name: g.name,
      })) ?? [];

    if (docs.length) {
      await db.collection('platforms').insertMany(docs, { ordered: false });
    }

    return json({ ok: true, message: 'Load platforms' }, 201);
  } catch (err: any) {
    return json({ ok: false, error: String(err?.message || err) }, 500);
  }
};
