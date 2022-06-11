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

export const NIKAU_API_URL: string =
	process.env.VITE_CENNZNET_NIKAU_API_URL || "";
export const RATA_API_URL: string =
	process.env.VITE_CENNZNET_RATA_API_URL || "";

export const ENDOWED_ACCOUNT_SEEDS: string[] = String(
	process.env.ENDOWED_ACCOUNT_SEEDS
).split(",");

export const TRANSFER_AMOUNT: number =
	Number(process.env.VITE_TRANSFER_AMOUNT) || 0;

export const GITHUB_CLIENT_ID: string = process.env.GITHUB_CLIENT_ID || "";
export const GITHUB_CLIENT_SECRET: string =
	process.env.GITHUB_CLIENT_SECRET || "";
export const OAUTH_REDIRECT_URI: string =
	process.env.VITE_OAUTH_REDIRECT_URI || "";
export const OAUTH_JWT_SECRET_KEY: string =
	process.env.OAUTH_JWT_SECRET_KEY || "";
