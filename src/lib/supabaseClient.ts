// src/lib/supabaseClient.ts
import { createBrowserClient } from '@supabase/auth-helpers-sveltekit';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY } from '$env/static/public';

export const supabase = createBrowserClient(
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY
);
