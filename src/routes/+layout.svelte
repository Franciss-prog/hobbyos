<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { isDarkMode } from '$lib/stores';
	import { Toaster } from 'svelte-sonner';

	let { children } = $props();
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

{#if $isDarkMode}
	<Toaster
		theme="dark"
		toastOptions={{
			style: 'background-color: var(--color-subDark); 	font-family: Michroma, sans-serif; '
		}}
		position="top-right"
	/>
{:else}
	<Toaster
		theme="light"
		toastOptions={{
			style: 'background-color: var(--color-subLight); 	font-family: Michroma, sans-serif; '
		}}
		position="top-right"
	/>
{/if}

<div
	class="min-h-screen bg-light
  text-dark"
>
	{@render children()}
</div>
