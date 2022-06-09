import type { CENNZnetToken, MetamaskNetworks } from "@/types";

export const SUPPORTED_TOKENS: CENNZnetToken[] = [
	{
		symbol: "CENNZ",
		assetId: 16000,
		logo: "cennz.svg",
		decimals: 4,
	},
	{
		symbol: "CPAY",
		assetId: 16001,
		logo: "cpay.svg",
		decimals: 4,
	},
];

export const NIKAU_API_URL = process.env.VITE_CENNZNET_NIKAU_API_URL;
export const RATA_API_URL = process.env.VITE_CENNZNET_RATA_API_URL;

export const NETWORKS: MetamaskNetworks = {
	Nikau: {
		blockExplorerUrl: "https://nikau.uncoverexplorer.com",
		chainId: "0xbb9",
		chainName: "CENNZnet Nikau",
		rpcUrl: "https://nikau.centrality.me/public",
	},
	Rata: {
		blockExplorerUrl: "https://rata.uncoverexplorer.com",
		chainId: "0xbb8",
		chainName: "CENNZnet Rata",
		rpcUrl: "https://rata.centrality.me/public",
	},
};
