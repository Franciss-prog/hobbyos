import { errorMessage, type LoginParams, type RegisterParams } from '$lib';
import { loading } from '$lib/stores';
import { supabase } from '$lib/supabaseClient';
import { toast } from 'svelte-sonner';

export const onLogin = async ({ email, password }: LoginParams, clear: () => void) => {
	// UPDATE THE LOADING
	loading.set(true);

	try {
		// FORM VALIDATION
		if (!email || !password) {
			errorMessage('Please Input all Fields');
			clear();
			return;
		}
		// PERFORM THE AUTHENTICATION
		const { data, error } = await supabase.auth.signInWithPassword({ email, password });

		// VALIDATION IF ERROR OCCURS
		if (error) {
			errorMessage(error.message);
			clear();
			return;
		}

		// when logged in we ned to print the name
		console.log(data);
		// success response
		toast.success('Login Successfully!', { duration: 1200 });
		clear();
		setTimeout(() => (window.location.href = '/dashboard'), 1201);
	} finally {
		// success message
		loading.set(false);
	}
};

export const onRegister = async ({ name, email, password }: RegisterParams, clear: () => void) => {
	// LOADING
	loading.set(true);

	// trycatch
	try {
		// FORM VALIDATION
		if (!name || !email || !password) {
			errorMessage('Please Input all Fields');
			clear();
			return;
		}

		// VALIDATION
		const { error } = await supabase.auth.signUp({ email, password, options: { data: { name } } });

		// ERROR HANDLING
		if (error) {
			errorMessage(error.message);
			clear();
			return;
		}

		// success
		toast.success(`Welcome to HobbyOS, ${name}!`, { duration: 1200 });
		setTimeout(() => (window.location.href = '/dashboard'), 1201);
	} finally {
		loading.set(false);
	}
};
