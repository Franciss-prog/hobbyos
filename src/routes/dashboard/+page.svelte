<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Button, onLogout } from '$lib';
	import { toast } from 'svelte-sonner';
	import { loading } from '$lib/stores';
	import { hobbies } from '$lib/assets/data/sample';
	import { Plus, Play, Pause, TrendingUp, Calendar } from 'lucide-svelte';

	const handleLogout = async () => {
		// logout function
		const logout = await onLogout();
		// validate if the sub process is perfectly done with no error
		if (!logout) return;

		toast.success(`See you again, ${page.data.name}`, { duration: 1201 });
		//set to loading to false
		loading.set(false);
		// goto home
		setTimeout(() => goto('/'), 1201);
	};

	let activeView = 'active';

	$: activeHobbies = hobbies.filter((h) => h.status === 'active');
	$: pausedHobbies = hobbies.filter((h) => h.status === 'paused');

	const getIntentColor = (intent: string) => {
		switch (intent) {
			case 'relax':
				return 'bg-blue-100 text-blue-800';
			case 'skill':
				return 'bg-purple-100 text-purple-800';
			case 'output':
				return 'bg-green-100 text-green-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	};
</script>

<div class="min-h-screen bg-light text-dark">
	<!-- Header -->
	<header class="border-b border-dark/10 bg-subLight">
		<div class="mx-auto max-w-6xl px-6 py-6">
			<h1 class="mb-2 font-stardock text-3xl tracking-wider">Hobby OS</h1>
			<p class="text-sm text-dark/60">Manage your interests without the pressure</p>
		</div>
	</header>

	<div class="mx-auto max-w-6xl px-6 py-8">
		<!-- Quick Stats -->
		<div class="mb-8 grid grid-cols-3 gap-4">
			<div class="border border-dark/10 bg-subLight p-4">
				<div class="mb-1 text-2xl font-bold">{activeHobbies.length}</div>
				<div class="text-xs text-dark/60">Active hobbies</div>
			</div>
			<div class="border border-dark/10 bg-subLight p-4">
				<div class="mb-1 text-2xl font-bold">12</div>
				<div class="text-xs text-dark/60">Sessions this week</div>
			</div>
			<div class="border border-dark/10 bg-subLight p-4">
				<div class="mb-1 text-2xl font-bold">4.2</div>
				<div class="text-xs text-dark/60">Avg interest level</div>
			</div>
		</div>

		<!-- View Toggle -->
		<div class="mb-6 flex gap-2">
			<button
				on:click={() => (activeView = 'active')}
				class="px-4 py-2 text-sm transition-colors {activeView === 'active'
					? 'bg-dark text-light'
					: 'border border-dark/10 bg-subLight text-dark hover:bg-dark/5'}"
			>
				Active ({activeHobbies.length})
			</button>
			<button
				on:click={() => (activeView = 'paused')}
				class="px-4 py-2 text-sm transition-colors {activeView === 'paused'
					? 'bg-dark text-light'
					: 'border border-dark/10 bg-subLight text-dark hover:bg-dark/5'}"
			>
				Paused ({pausedHobbies.length})
			</button>
			<button
				on:click={() => (activeView = 'insights')}
				class="px-4 py-2 text-sm transition-colors {activeView === 'insights'
					? 'bg-dark text-light'
					: 'border border-dark/10 bg-subLight text-dark hover:bg-dark/5'}"
			>
				Insights
			</button>
		</div>

		<!-- Hobbies List -->
		{#if activeView === 'active'}
			<div class="space-y-3">
				{#each activeHobbies as hobby (hobby.id)}
					<div class="border border-dark/10 bg-subLight p-5 transition-colors hover:border-dark/30">
						<div class="mb-3 flex items-start justify-between">
							<div class="flex-1">
								<h3 class="mb-2 text-lg font-medium">{hobby.name}</h3>
								<div class="flex items-center gap-3 text-xs text-dark/60">
									<span class="rounded px-2 py-1 {getIntentColor(hobby.intent)}">
										{hobby.intent}
									</span>
									<span class="flex items-center gap-1">
										<Calendar class="h-3 w-3" />
										{hobby.lastSession}
									</span>
									<span>{hobby.sessions} sessions</span>
									<span>★ {hobby.avgInterest}/5</span>
								</div>
							</div>
							<div class="flex gap-2">
								<button class="bg-dark p-2 text-light transition-colors hover:bg-subDark">
									<Play class="h-4 w-4" />
								</button>
								<button class="border border-dark/20 p-2 transition-colors hover:bg-dark/5">
									<Pause class="h-4 w-4" />
								</button>
							</div>
						</div>
					</div>
				{/each}
				<button
					class="flex w-full items-center justify-center gap-2 border border-dashed border-dark/10 bg-subLight p-5 text-sm transition-colors hover:border-dark/30 hover:bg-dark/5"
				>
					<Plus class="h-4 w-4" />
					Add new hobby
				</button>
			</div>
		{/if}

		{#if activeView === 'paused'}
			<div class="space-y-3">
				{#each pausedHobbies as hobby (hobby.id)}
					<div
						class="border border-dark/10 bg-subLight p-5 opacity-60 transition-opacity hover:opacity-100"
					>
						<div class="mb-3 flex items-start justify-between">
							<div class="flex-1">
								<h3 class="mb-2 text-lg font-medium">{hobby.name}</h3>
								<div class="flex items-center gap-3 text-xs text-dark/60">
									<span class="rounded px-2 py-1 {getIntentColor(hobby.intent)}">
										{hobby.intent}
									</span>
									<span class="flex items-center gap-1">
										<Calendar class="h-3 w-3" />
										{hobby.lastSession}
									</span>
									<span>{hobby.sessions} sessions</span>
								</div>
							</div>
							<button
								class="bg-dark px-4 py-2 text-sm text-light transition-colors hover:bg-subDark"
							>
								Resume
							</button>
						</div>
					</div>
				{/each}
				{#if pausedHobbies.length === 0}
					<div class="py-12 text-center text-sm text-dark/40">
						No paused hobbies. Take breaks when you need them.
					</div>
				{/if}
			</div>
		{/if}

		{#if activeView === 'insights'}
			<div class="space-y-4">
				<div class="border border-dark/10 bg-subLight p-6">
					<div class="mb-4 flex items-start gap-3">
						<TrendingUp class="mt-1 h-5 w-5 text-green-600" />
						<div>
							<h3 class="mb-1 font-medium">Energy is high this week</h3>
							<p class="text-sm text-dark/60">
								You've logged 12 sessions across 3 hobbies. Interest levels are stable at 4.2/5.
							</p>
						</div>
					</div>
				</div>

				<div class="border border-dark/10 bg-subLight p-6">
					<div class="mb-4 flex items-start gap-3">
						<Calendar class="mt-1 h-5 w-5 text-blue-600" />
						<div>
							<h3 class="mb-1 font-medium">Consider checking on Guitar</h3>
							<p class="text-sm text-dark/60">
								Last session was 1 week ago. No pressure—just a gentle reminder.
							</p>
						</div>
					</div>
				</div>

				<div class="border border-dark/10 bg-subLight p-6">
					<h3 class="mb-3 font-medium">This week's breakdown</h3>
					<div class="space-y-2 text-sm">
						<div class="flex justify-between">
							<span class="text-dark/60">Relax activities</span>
							<span class="font-medium">4 sessions</span>
						</div>
						<div class="flex justify-between">
							<span class="text-dark/60">Skill building</span>
							<span class="font-medium">3 sessions</span>
						</div>
						<div class="flex justify-between">
							<span class="text-dark/60">Output focused</span>
							<span class="font-medium">5 sessions</span>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>
