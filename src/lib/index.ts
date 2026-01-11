// | components
// --> root
export { default as Home } from './components/root/Home.svelte';
export { default as Core } from './components/root/Core.svelte';
export { default as Why } from './components/root/Why.svelte';
export { default as Mvp } from './components/root/Mvp.svelte';
export { default as Input } from './components/root/Input.svelte';
export { default as Footer } from './components/root/Footer.svelte';
export { default as Button } from './components/root/Button.svelte';

// --> auth
export { default as Login } from '$lib/components/auth/Login.svelte';
export { default as Register } from '$lib/components/auth/Register.svelte';

// utils
export { errorMessage } from './utils/authUtils';

// actions
export { onLogin, onRegister } from '$lib/actions/authActions';
export { onLogout } from '$lib/actions/dashboardActions';

// types
export type { UserInterface, LoginParams, RegisterParams } from '$lib/types';
