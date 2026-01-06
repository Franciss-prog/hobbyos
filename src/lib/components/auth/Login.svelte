<script lang="ts">
	import { onLogin, Button, Input } from '$lib';
	import { isDarkMode } from '$lib/stores';
	// user state
	let email = '';
	let password = '';
	// function to clear
	const clear = () => {
		email = '';
		password = '';
	};
</script>

<form
	on:submit|preventDefault={() => onLogin({ email, password }, clear)}
	class="relative flex min-h-[80vh] flex-col gap-4"
>
	<Input placeholder="Email" bind:value={email} />
	<Input placeholder="Password" bind:value={password} />
	<span>
		Doesn't Have an Account? <a href="/auth/register" class="underline">Register Here</a>
	</span>
</form>
<!-- floating container -->
<div class="fixed right-6 bottom-6 z-50">
	<Button onClick={() => onLogin({ email, password }, clear)} isDarkMode={$isDarkMode}>Login</Button
	>
</div>
