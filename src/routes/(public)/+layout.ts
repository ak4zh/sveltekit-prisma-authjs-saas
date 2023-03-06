import type { LayoutLoad, LayoutLoadEvent } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutLoad = async (event: LayoutLoadEvent) => {
	const { session } = await event.parent();
	if (session?.user) {
		throw redirect(303, '/dashboard');
	}
};

export const prerender = false;