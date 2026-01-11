// src/lib/supabase/server.ts
import type { RequestEvent } from '@sveltejs/kit';
import { createServerClient } from '@supabase/auth-helpers-sveltekit';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY } from '$env/static/public';

export const createSupabase = (event: RequestEvent) =>
	createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY, {
		cookies: {
			get: (key: string) => event.cookies.get(key),
			set: (key: string, value: string, options?: any) => event.cookies.set(key, value, options),
			remove: (key: string, options?: any) => event.cookies.delete(key, options)
		}
	});
