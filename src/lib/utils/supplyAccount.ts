import type { CENNZnetNetwork } from "$lib/types";

const supplyAccount = async (
	cennzAddress: string,
	network: CENNZnetNetwork,
	assetId: number,
	githubAccount: string
) =>
	await fetch(`/api/supplyAccount`, {
		method: "post",
		body: JSON.stringify({
			cennzAddress,
			network,
			assetId,
			githubAccount,
		}),
	})
		.then((res) => res.json())
		.then((data) => data);

export default supplyAccount;
