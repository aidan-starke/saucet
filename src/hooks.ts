import type { Handle, GetSession } from "@sveltejs/kit";

import { appAuth } from "$lib/utils/appAuth";
import { sequence } from "@sveltejs/kit/hooks";

interface EventLocals {
	error: boolean;
}

export const handle: Handle = sequence(async ({ event, resolve }) => {
	(event.locals as EventLocals).error = false;
	let response: any = await resolve(event);

	if (response.status > 399 && response.status < 600) {
		(event.locals as EventLocals).error = true;
		response = await resolve(event);
	}

	return response;
});

export const getSession: GetSession = async (request) => {
	const { user }: any = await appAuth.getSession(request);

	return { user, error: (request.locals as EventLocals).error };
};
