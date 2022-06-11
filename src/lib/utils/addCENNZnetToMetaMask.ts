import type { MetaMaskInpageProvider } from "@metamask/providers";
import type { CENNZnetNetwork } from "$lib/types";

import { NETWORKS } from "$lib/constants";

export default async function addCENNZnetToMetaMask(
	extension: MetaMaskInpageProvider,
	network: CENNZnetNetwork
) {
	try {
		await extension.request({
			method: "wallet_switchEthereumChain",
			params: [{ chainId: NETWORKS[network].chainId }],
		});
	} catch (error: any) {
		if (error.code !== 4902) throw error;

		await extension.request({
			method: "wallet_addEthereumChain",
			params: [
				{
					chainId: NETWORKS[network].chainId,
					blockExplorerUrls: [NETWORKS[network].blockExplorerUrl],
					chainName: NETWORKS[network].chainName,
					nativeCurrency: {
						name: "CPAY",
						symbol: "CPAY",
						decimals: 18,
					},
					rpcUrls: [NETWORKS[network].rpcUrl],
				},
			],
		});
	}
}
