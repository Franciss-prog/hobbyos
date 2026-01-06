import { errorMessageHandler, type LoginParams, type RegisterParams } from '$lib';
import { loading } from '$lib/stores';

export const onLogin = ({ email, password }: LoginParams) => {
	// UPDATE THE LOADING
	loading.set(true);

	// FORM VALIDATION
	if (!email || !password) {
		errorMessageHandler('Please Input fields', { email, password });
		return;
	}
};

export const onRegister = ({ name, email, password }: RegisterParams) => {};
