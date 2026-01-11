<script lang="ts">
	import { goto } from '$app/navigation';
	import { onLogin, Button, Input } from '$lib';
	import { isDarkMode } from '$lib/stores';
	import { toast } from 'svelte-sonner';

	// user state
	let email = '';
	let password = '';
	// function to clear
	const clear = () => {
		email = '';
		password = '';
	};

	const handleLogin = async () => {
		const session = await onLogin({ email, password }, clear);

		if (!session) return;
		// success Message
		toast.success(`Welcome Back to HobbyOS, ${session.user.user_metadata.name}`, {
			duration: 1200
		});

		// goto /dashboard
		setTimeout(() => goto('/dashboard'), 1201);
	};
</script>

<form
	on:submit|preventDefault={() => onLogin({ email, password }, clear)}
	class="relative flex min-h-[80vh] flex-col gap-4"
>
	<Input placeholder="Email" bind:value={email} type="email" />
	<Input placeholder="Password" bind:value={password} type="password" />
	<span>
		Doesn't Have an Account? <a href="/auth/register" class="underline">Register Here</a>
	</span>
</form>
<!-- floating container -->
<div class="fixed right-6 bottom-6 z-50">
	<Button onClick={handleLogin} isDarkMode={$isDarkMode}>Login</Button>
</div>
