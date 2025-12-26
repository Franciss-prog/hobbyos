<script lang="ts">
	import { Zap, Star, Pause, TrendingUp } from 'lucide-svelte';
</script>

<section class="px-6 py-20">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-16 font-stardock text-4xl font-bold md:text-5xl">Core principles</h2>
		<div class="grid gap-6 md:grid-cols-2">
			<div class="rounded-lg border border-gray-200 p-6 transition hover:border-dark">
				<Star class="mb-3 text-gray-600" size={24} />
				<h3 class="mb-2 text-lg font-semibold">Interest > streaks</h3>
				<p class="text-sm text-gray-600">Follow genuine interest, not arbitrary goals.</p>
			</div>
			<div class="rounded-lg border border-gray-200 p-6 transition hover:border-dark">
				<Pause class="mb-3 text-gray-600" size={24} />
				<h3 class="mb-2 text-lg font-semibold">Pauses are healthy</h3>
				<p class="text-sm text-gray-600">Breaks are part of sustainable creativity.</p>
			</div>
			<div class="rounded-lg border border-gray-200 p-6 transition hover:border-dark">
				<TrendingUp class="mb-3 text-gray-600" size={24} />
				<h3 class="mb-2 text-lg font-semibold">Progress is non-linear</h3>
				<p class="text-sm text-gray-600">Growth happens in bursts, not lines.</p>
			</div>
			<div class="rounded-lg border border-gray-200 p-6 transition hover:border-dark">
				<Zap class="mb-3 text-gray-600" size={24} />
				<h3 class="mb-2 text-lg font-semibold">Low friction over perfection</h3>
				<p class="text-sm text-gray-600">Quick logging beats elaborate systems.</p>
			</div>
		</div>
	</div>
</section>
