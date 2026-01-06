<script lang="ts">
	import { onLogin, Button, Input } from '$lib';

	// user state
	let email = '';
	let password = '';
</script>

<form on:submit|preventDefault={() => onLogin({ email, password })} class="flex flex-col gap-4">
	<Input placeholder={'Email'} bind:value={email} />
	<Input placeholder={'Password'} bind:value={email} />
	<span>
		Doesn't Have an Account? <a href="/auth/register" class="underline">Register Here</a></span
	>
</form>
