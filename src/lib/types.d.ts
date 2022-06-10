export type CENNZnetNetwork = "Nikau" | "Rata";

export interface CENNZnetToken {
	symbol: string;
	assetId: number;
	logo: string;
	decimals: number;
}

export interface TxStatus {
	status: "in-progress" | "success" | "fail";
	message: unknown;
	balance?: string;
}

interface MetaMaskNetwork {
	blockExplorerUrl: string;
	chainId: string;
	chainName: string;
	rpcUrl: string;
}

export interface MetamaskNetworks {
	Nikau: MetaMaskNetwork;
	Rata: MetaMaskNetwork;
}

export type Chain = "CENNZnet" | "Ethereum";

export interface GenericCoin {
	decimals: number;
	decimalsValue: number;
	symbol: string;
}

export interface PropsWithChildren {
	children?: ReactNode;
}

export interface GithubSession extends Session {
	user: {
		login: string;
	};
}

declare module "*.svg";