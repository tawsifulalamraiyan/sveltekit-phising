// src/lib/server/db/index.ts
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// or
// import { DATABASE_URL } from '$env/static/private';

const sql = neon(
	'postgresql://neondb_owner:npg_zWx4SPKs9rHO@ep-curly-haze-ad9gakr5-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require'
); // or DATABASE_URL if using static
export const db = drizzle(sql);
