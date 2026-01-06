import { toast } from 'svelte-sonner';
import { loading } from '$lib/stores';

export const errorMessage = (message: string) => {
	toast.error(message, { duration: 1200 });
	setTimeout(() => loading.set(false), 1201);
};

export const successMessage = (message: string) => {
	toast.success(message, { duration: 1200 });
};
