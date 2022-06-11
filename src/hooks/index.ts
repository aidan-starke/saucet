import { appAuth } from "$lib/utils/appAuth";
import type { Handle, GetSession } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

interface EventLocals {
	error: boolean;
}

export const handle: Handle = sequence(
	/**
	 * Set `event.locals.error` true if endpoint responds with
	 * an http status code of 4xx or 5xx, or false otherwise.
	 */
	async ({ event, resolve }) => {
		(event.locals as EventLocals).error = false;
		let response: any = await resolve(event);

		if (response.status > 399 && response.status < 600) {
			(event.locals as EventLocals).error = true;
			response = await resolve(event);
		}

		return response;
	}
);

export const getSession: GetSession = async (request) => {
	const { user }: any = await appAuth.getSession(request);

	return { user, error: (request.locals as EventLocals).error };
};
