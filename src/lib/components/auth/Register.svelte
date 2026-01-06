<script lang="ts">
	import { onRegister, Button, Input } from '$lib';
	import { isDarkMode } from '$lib/stores';
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
	<Button onClick={() => onRegister({ name, email, password }, clear)} isDarkMode={$isDarkMode}
		>Register</Button
	>
</div>
