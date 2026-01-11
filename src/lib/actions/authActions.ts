import { errorMessage, type LoginParams, type RegisterParams } from '$lib';
import { loading } from '$lib/stores';
import { supabase } from '$lib/supabaseClient';
import { toast } from 'svelte-sonner';

export const onLogin = async ({ email, password }: LoginParams, clear: () => void) => {
	loading.set(true);

	if (!email || !password) {
		errorMessage('Please Input all Fields');
		clear();
		loading.set(false);
		return null;
	}

	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password
	});

	if (error) {
		errorMessage(error.message);
		clear();
		loading.set(false);
		return null;
	}

	loading.set(false);
	return data.session;
};
export const onRegister = async ({ name, email, password }: RegisterParams, clear: () => void) => {
	// LOADING
	loading.set(true);

	// FORM VALIDATION
	if (!name || !email || !password) {
		errorMessage('Please Input all Fields');
		clear();
		return;
	}

	// VALIDATION
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: { data: { name } }
	});

	// ERROR HANDLING
	if (error) {
		errorMessage(error.message);
		clear();
		return;
	}
	// set the loading to false
	loading.set(false);
	return data;
};
