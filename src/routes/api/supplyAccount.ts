import { Api } from "@cennznet/api";
import type { RequestHandler } from "@sveltejs/kit";

import {
	NIKAU_API_URL,
	RATA_API_URL,
	ENDOWED_ACCOUNT_SEEDS,
	TRANSFER_AMOUNT,
} from "$lib/constants";
import { EndowedAccounts } from "$lib/utils";

export const post: RequestHandler = async ({ request }) => {
	const { cennzAddress, network, assetId, githubAccount } = await request
		.clone()
		.json();

	if (!cennzAddress) throw { message: "No address provided" };

	if (githubAccount !== "aidan-starke")
		throw { message: "TODO: check for CENNZnet org" };

	try {
		let networkUrl: string;
		switch (network) {
			case "Nikau":
				networkUrl = NIKAU_API_URL;
				break;
			case "Rata":
				networkUrl = RATA_API_URL;
				break;
			default:
				throw { message: "No network provided" };
		}

		const api = await Api.create({ provider: networkUrl });
		const endowedAccounts = new EndowedAccounts(api, ENDOWED_ACCOUNT_SEEDS);

		await endowedAccounts.init();
		await endowedAccounts.send(
			api.tx.genericAsset.transfer(assetId, cennzAddress, TRANSFER_AMOUNT)
		);

		await api.disconnect();

		return { status: 200, body: { success: true } };
	} catch (err: any) {
		return {
			status: 400,
			body: { success: false, message: err.message || "" },
		};
	}
};
