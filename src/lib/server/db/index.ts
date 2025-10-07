// src/lib/server/db/index.ts
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { env } from '$env/dynamic/private';
// or
// import { DATABASE_URL } from '$env/static/private';

const sql = neon(env.DATABASE_URL); // or DATABASE_URL if using static
export const db = drizzle(sql);
