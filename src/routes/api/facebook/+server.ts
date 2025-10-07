import { db } from '$lib/server/db/index.js';
import { users } from '$lib/server/db/schema.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { email, password } = await request.json();
	if (!email || !password) return json({ error: 'Missing fields' }, { status: 400 });

	const inserted = await db.insert(users).values({ email, password }).returning();

	return json(inserted);
}
