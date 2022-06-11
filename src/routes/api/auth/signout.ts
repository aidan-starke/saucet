import cookie from "cookie";
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async ({ request }) => {
	const headers = { Location: "/" };

	const cookies = request.headers.get("cookie");
	if (cookies && cookie.parse(cookies)["svelteauthjwt"]) {
		(headers as any)["set-cookie"] = cookie.serialize("svelteauthjwt", "", {
			path: "/",
			httpOnly: true,
			expires: new Date("1970-01-01 00:00:00 UTC"),
		});
	}

	return { headers, status: 302 };
};
