export const prerender = false; // es una API, no se prerenderiza

import type { APIRoute } from 'astro';
import { getDb } from '@/server/db';

// export const POST: APIRoute = async ({ request }) => {
//   let body: any = {};
//   try {
//     body = await request.json(); // todo viene por JSON
//   } catch {
//     return new Response(JSON.stringify({ ok: false, error: "Invalid or empty JSON body" }), {
//       status: 400,
//       headers: { "Content-Type": "application/json" },
//     });
//   }

//   const db = await getDb();
//   const res = await db.collection("posts").insertOne({
//     ...body,
//     createdAt: new Date(),
//   });

//   return new Response(JSON.stringify({ ok: true, insertedId: res.insertedId }), {
//     status: 201,
//     headers: { "Content-Type": "application/json" },
//   });
// };

export const POST: APIRoute = async ({ request }) => {
  try {
    let body: any = {};
    
    try {
        body = await request.json();
    } catch {
        return new Response(JSON.stringify({ ok: false, error: "Invalid or empty JSON body" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
        });
    }

    console.log('body', body);
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
