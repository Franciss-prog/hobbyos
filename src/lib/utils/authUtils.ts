import type { LoginParams, RegisterParams, UserInterface } from '$lib';
import { toast } from 'svelte-sonner';
import { loading } from '$lib/stores';

export const errorMessageHandler = (message: string, { name, email, password }: UserInterface) => {
	// alert the user
	toast.error(message, { duration: 1200 });

	// setTimeOUT
	setTimeout(() => {
		// clear the fields
		name = '';
		email = '';
		password = '';

		// set the loading to false
		loading.set(false);
	}, 1201);
};
