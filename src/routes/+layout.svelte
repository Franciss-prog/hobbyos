<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
	import { Footer } from '$lib';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Michroma&display=swap"
		rel="stylesheet"
	/></svelte:head
>

<div
	class="min-h-screen bg-light
  text-dark"
>
	{@render children()}
	<Footer />
</div>
