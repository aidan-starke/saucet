import type { MetaMaskInpageProvider } from "@metamask/providers";
import type { CENNZnetNetwork } from "$lib/types";
import { NETWORKS } from "$lib/constants";
import { addCENNZnetToMetaMask } from "$lib/utils";

export default async function ensureEthereumChain(
	extension: MetaMaskInpageProvider,
	network: CENNZnetNetwork
): Promise<void> {
	const ethChainId = await extension.request({ method: "eth_chainId" });

	if (ethChainId === NETWORKS[network].chainId) return;

	await addCENNZnetToMetaMask(extension, network);
}
