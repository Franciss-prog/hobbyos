<script lang="ts">
	import { Target, Clock, Pause, Calendar } from 'lucide-svelte';
</script>

<section class="bg-dark px-6 py-20 text-light">
	<div class="mx-auto max-w-4xl">
		<h2 class="mb-16 font-stardock text-4xl md:text-5xl">What it does</h2>
		<div class="space-y-12">
			<div class="flex items-start gap-5">
				<Target class="mt-1 flex-shrink-0 text-gray-400" size={24} />
				<div>
					<h3 class="mb-2 text-xl font-semibold">Clear intent</h3>
					<p class="text-gray-400">relax / skill / output</p>
				</div>
			</div>
			<div class="flex items-start gap-5">
				<Clock class="mt-1 flex-shrink-0 text-gray-400" size={24} />
				<div>
					<h3 class="mb-2 text-xl font-semibold">Quick logging</h3>
					<p class="text-gray-400">duration · interest · notes</p>
				</div>
			</div>
			<div class="flex items-start gap-5">
				<Pause class="mt-1 flex-shrink-0 text-gray-400" size={24} />
				<div>
					<h3 class="mb-2 text-xl font-semibold">Intentional pauses</h3>
					<p class="text-gray-400">No guilt. Just honest tracking.</p>
				</div>
			</div>
			<div class="flex items-start gap-5">
				<Calendar class="mt-1 flex-shrink-0 text-gray-400" size={24} />
				<div>
					<h3 class="mb-2 text-xl font-semibold">Pattern insights</h3>
					<p class="text-gray-400">Understand your natural rhythms.</p>
				</div>
			</div>
		</div>
	</div>
</section>
