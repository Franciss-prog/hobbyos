<script lang="ts">
	import { Waves, Zap, Pause } from 'lucide-svelte';
</script>

<section class="bg-dark px-6 py-20 text-light">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-8 text-4xl font-bold md:text-5xl">Why Hobby OS exists</h2>
		<p class="mb-6 text-xl text-gray-300">Most trackers assume consistency. We know better:</p>
		<ul class="space-y-3 text-lg text-gray-300">
			<li class="flex items-start">
				<Waves class="mt-1 mr-3 flex-shrink-0" size={20} />
				<span>Motivation comes in waves</span>
			</li>
			<li class="flex items-start">
				<Zap class="mt-1 mr-3 flex-shrink-0" size={20} />
				<span>Hyperfocus leads to burnout</span>
			</li>
			<li class="flex items-start">
				<Pause class="mt-1 mr-3 flex-shrink-0" size={20} />
				<span>Pauses are normal, not failures</span>
			</li>
		</ul>
		<p class="mt-6 text-xl font-semibold">Hobby OS is built around that reality.</p>
	</div>
</section>
