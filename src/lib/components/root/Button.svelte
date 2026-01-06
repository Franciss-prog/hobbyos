<script lang="ts">
	import { loading } from '$lib/stores';
	export let className = '';
</script>

<button
	class="group relative flex items-center justify-center overflow-hidden border border-current/20 px-6 py-2 text-sm font-light tracking-wider uppercase transition-all hover:border-current disabled:cursor-not-allowed disabled:opacity-50 {className}"
	disabled={$loading}
>
	<!-- sliding background -->
	<span
		class="absolute inset-0 w-0 bg-dark transition-all duration-300 ease-out group-hover:w-full dark:bg-light"
	></span>
	<!-- container so button width is consistent -->
	<span
		class="relative z-10 flex items-center justify-center transition-colors duration-300 group-hover:text-light dark:group-hover:text-dark"
	>
		<!-- actual text -->
		<span class="transition-opacity duration-200" class:opacity-0={$loading}>
			<slot />
		</span>
		<!-- spinner -->
		{#if $loading}
			<div class="absolute inset-0 z-20 flex items-center justify-center">
				<div class="flex flex-row gap-1.5">
					<div class="h-1.5 w-1.5 animate-bounce rounded-full bg-current"></div>
					<div
						class="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-.3s]"
					></div>
					<div
						class="h-1.5 w-1.5 animate-bounce rounded-full bg-current [animation-delay:-.5s]"
					></div>
				</div>
			</div>
		{/if}
	</span>
</button>
