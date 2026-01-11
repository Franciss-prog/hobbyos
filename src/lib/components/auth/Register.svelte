<script lang="ts">
	import { onRegister, Button, Input } from '$lib';
	import { goto } from '$app/navigation';
	import { isDarkMode } from '$lib/stores';
	import { toast } from 'svelte-sonner';
	// user state
	let name = '';
	let email = '';
	let password = '';
	// clear
	const clear = () => {
		name = '';
		email = '';
		password = '';
	};

	const handleRegister = async () => {
		await onRegister({ name, email, password }, clear);

		// success message
		toast.success(`Welcome to HobbyOS! ${name}`);

		// goto dashboard
		setTimeout(() => goto('/dashboard'), 1201);
	};
</script>

<form
	on:submit|preventDefault={() => onRegister({ name, email, password }, clear)}
	class="relative flex min-h-[80vh] flex-col gap-4"
>
	<Input placeholder="Username" bind:value={name} />
	<Input placeholder="Email" bind:value={email} type="email" />
	<Input placeholder="Password" bind:value={password} type="password" />
	<span>
		Already Have an Account? <a href="/auth" class="underline">Login Here</a>
	</span>
</form>
<!-- floating container -->
<div class="fixed right-6 bottom-6 z-50">
	<Button onClick={handleRegister} isDarkMode={$isDarkMode}>Register</Button>
</div>
