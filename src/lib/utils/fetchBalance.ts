import type { Balance } from "@cennznet/types";
import type { CENNZnetNetwork } from "$lib/types";

export default async function fetchBalance(
	address: string,
	assetId: number,
	network: CENNZnetNetwork
): Promise<Balance> {
	return fetch(`https://${network.toLowerCase()}.centrality.me/public`, {
		method: "POST",
		body: JSON.stringify({
			id: 1,
			jsonrpc: "2.0",
			method: "genericAsset_getBalance",
			params: [address, assetId],
		}),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((response) => response?.result.available)
		.catch((error) => console.log("error fetching balance:", error.message));
}
