<script lang="ts">
	let { children } = $props();
	import { isDarkMode } from '$lib/stores';
	console.log($isDarkMode);
</script>

<main class="px-8 py-5 {$isDarkMode ? 'bg-dark text-light' : ' bg-light text-dark'} min-h-screen">
	{@render children()}
</main>
