<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Button, onLogout } from '$lib';
	import { toast } from 'svelte-sonner';
	import { loading } from '$lib/stores';

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
</script>

<main>
	<span>welcome to HobbyOS {page.data.name}</span>
	<Button onClick={handleLogout}>Logout</Button>
</main>
