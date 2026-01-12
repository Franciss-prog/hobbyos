import { toast } from 'svelte-sonner';
import { onLogout } from '$lib/actions/dashboardActions';

export const handleLogout = async () => {
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
