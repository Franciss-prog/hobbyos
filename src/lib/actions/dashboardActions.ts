import { loading } from '$lib/stores';
import { supabase } from '$lib/supabaseClient';
import { toast } from 'svelte-sonner';

export const onLogout = async () => {
	loading.set(true);

	// perform the signout
	const { error } = await supabase.auth.signOut();

	// if error occurs
	if (error) {
		// toast the message
		toast.error(error.message, { duration: 1200 });
		loading.set(false);
		return false;
	}
	return true;
};
