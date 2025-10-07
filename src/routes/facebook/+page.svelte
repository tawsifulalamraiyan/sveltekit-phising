<script lang="ts">
	import axios from 'axios';
	let email = '';
	let password = '';

	async function login() {
		try {
			const res = await axios.post('/api/login', { email, password });
			console.log(res.data);
		} catch (err) {
			console.error(err);
		}
	}
</script>

<main
	class="flex min-h-screen flex-col items-center justify-center gap-10 bg-gray-100 px-6 py-10 md:flex-row md:px-20 md:py-20"
>
	<!-- Left Section -->
	<section class="max-w-lg text-center md:w-1/2 md:text-left">
		<h1 class="text-5xl font-bold text-blue-600 md:text-6xl">facebook</h1>
		<p class="mt-4 text-xl text-gray-700 md:text-2xl">
			Facebook helps you connect and share with the people in your life.
		</p>
	</section>

	<!-- Right Section -->
	<section
		class="flex w-full max-w-sm flex-col items-center rounded-xl bg-white p-6 shadow-lg md:w-80"
	>
		<input
			type="text"
			placeholder="Email address or phone number"
			bind:value={email}
			class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>

		<input
			type="password"
			placeholder="Password"
			bind:value={password}
			class="mt-3 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
		/>

		<button
			type="submit"
			on:click={login}
			class="mt-4 w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
		>
			Log in
		</button>

		<a href="/" class="mt-2 text-sm text-blue-600 hover:underline">Forgotten password?</a>

		<hr class="my-4 w-full border-gray-300" />

		<button
			class="rounded-md bg-green-500 px-4 py-2 font-semibold text-white transition hover:bg-green-600"
		>
			Create new account
		</button>
	</section>
</main>
