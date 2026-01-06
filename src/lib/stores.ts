import { writable } from 'svelte/store';

export const isDarkMode = writable<boolean>(
	typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
);
