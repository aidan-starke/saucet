import type { CENNZnetToken, MetamaskNetworks } from "$lib/types";

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

export const CENNZ_IPFS =
	"https://gateway.pinata.cloud/ipfs/QmfDkgrhCFfVJErVVDuU7UYasYsooXMEXFhBzLMNm6pgey";

export const NIKAU_API_URL = import.meta.env.VITE_CENNZNET_NIKAU_API_URL;
export const RATA_API_URL = import.meta.env.VITE_CENNZNET_RATA_API_URL;

export const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID || "";
export const GITHUB_CLIENT_SECRET =
	import.meta.env.VITE_GITHUB_CLIENT_SECRET || "";
export const OAUTH_REDIRECT_URI = import.meta.env.VITE_OAUTH_REDIRECT_URI || "";
export const OAUTH_JWT_SECRET_KEY =
	import.meta.env.VITE_OAUTH_JWT_SECRET_KEY || "";
