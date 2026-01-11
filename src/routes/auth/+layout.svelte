<script lang="ts">
	let { children } = $props();
	import { isDarkMode } from '$lib/stores';
	import { page } from '$app/state';
	import { Moon, Sun } from 'lucide-svelte';

	let path = $derived(page.url.pathname);
</script>

<main class="px-8 py-5 {$isDarkMode ? 'bg-dark text-light' : ' bg-light text-dark'} min-h-screen">
	<nav class="mb-10 flex w-full justify-between">
		<a class="font-stardock text-6xl" href="/">HobbyOS</a>
		<!-- dark Mode -->
		<button onclick={() => isDarkMode.update((v) => !v)}>
			{#if $isDarkMode}
				<Sun />
			{:else}
				<Moon />
			{/if}
		</button>
	</nav>

	{@render children()}
</main>
