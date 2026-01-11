import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { createSupabase } from '$lib/supabaseServer';

export const load: LayoutServerLoad = async (event) => {
	const supabase = createSupabase(event);

	// get the session
	const {
		data: { session }
	} = await supabase.auth.getSession();
	console.log(session);

	// validate the session
	if (!session) {
		throw redirect(303, '/auth');
	}
	// return the user info
	return { session, name: session.user.user_metadata.name };
};
