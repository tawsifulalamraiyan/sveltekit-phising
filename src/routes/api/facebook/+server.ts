import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const { email, password } = await request.json();

	const data = { email, password };
	console.log('email: ', data.email);
	console.log('password: ', data.password);
	return json(data);
}
