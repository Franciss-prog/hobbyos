import { createSupabase } from '$lib/supabaseServer';
import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
export const load: LayoutServerLoad = async (event) => {
	// init supabase server
	const supabase = createSupabase(event);

	// get the user
	const user = await supabase.auth.getUser();
	// validate the user
	if (!user) {
		throw redirect(303, '/auth');
	}

	// return the user inf
	return { name: user.data.user?.user_metadata.name };
};
