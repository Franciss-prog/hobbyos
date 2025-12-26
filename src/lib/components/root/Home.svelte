<script>
	import {
		Bike,
		Dumbbell,
		Paintbrush,
		Camera,
		Music,
		Book,
		Gamepad2,
		Palette
	} from 'lucide-svelte';
</script>

<!-- Hero Section -->
<section
	class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20"
>
	<!-- Background Icons -->
	<div class="absolute inset-0 opacity-30">
		<Bike
			class="absolute top-[15%] left-[10%] h-12 w-12 -rotate-12 text-gray-400 md:h-16 md:w-16"
		/>
		<Dumbbell
			class="absolute top-[25%] right-[15%] h-14 w-14 rotate-45 text-gray-400 md:h-20 md:w-20"
		/>
		<Paintbrush
			class="absolute bottom-[20%] left-[20%] h-10 w-10 rotate-12 text-gray-400 md:h-14 md:w-14"
		/>
		<Camera
			class="absolute right-[10%] bottom-[30%] h-12 w-12 -rotate-6 text-gray-400 md:h-18 md:w-18"
		/>
		<Music
			class="absolute top-[45%] left-[15%] h-12 w-12 rotate-90 text-gray-400 md:h-16 md:w-16"
		/>
		<Book
			class="absolute top-[40%] right-[25%] h-10 w-10 -rotate-45 text-gray-400 md:h-14 md:w-14"
		/>
		<Gamepad2
			class="absolute bottom-[35%] left-[5%] h-14 w-14 rotate-12 text-gray-400 md:h-20 md:w-20"
		/>
		<Palette
			class="absolute top-[70%] right-[30%] h-12 w-12 -rotate-24 text-gray-400 md:h-16 md:w-16"
		/>
	</div>
	<!-- Main Content -->
	<div class="relative z-10 mx-auto max-w-4xl text-center">
		<h1 class="mb-6 font-stardock text-5xl font-bold tracking-tight md:text-6xl lg:text-8xl">
			Hobby OS
		</h1>
		<p class="mx-auto mb-4 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl lg:text-2xl">
			A personal hobby management system designed for interest-driven minds.
		</p>
	</div>
	<!-- Get Started Button -->
	<div class="absolute right-6 bottom-6 z-10 md:right-8 md:bottom-8">
		<a
			href="/app"
			class="cursor-pointer rounded-lg border border-dark px-4 py-2 text-sm font-semibold transition hover:bg-dark hover:text-light"
			>Get started</a
		>
	</div>
</section>
