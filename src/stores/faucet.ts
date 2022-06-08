import type { Chain, CENNZnetNetwork, CENNZnetToken } from "@/types";
import type { Writable } from "svelte/store";

import { writable, derived } from "svelte/store";
import { isCENNZAddress, isEthereumAddress } from "@/utils";
import { SUPPORTED_TOKENS } from "@/constants";
import { cvmToAddress } from "@cennznet/types/utils";

export const address = writable<string>();
export const addressType = writable<Chain>();
export const network = writable<CENNZnetNetwork>();
export const token = writable<CENNZnetToken>(SUPPORTED_TOKENS[0]);
export const cennzAddress = derived<Writable<string>, string>(
	address,
	($address) =>
		isEthereumAddress($address) ? cvmToAddress($address) : $address
);

export const setAddressType = (address: string) => {
	if (isCENNZAddress(address)) {
		addressType.set("CENNZnet");
		return true;
	}

	if (isEthereumAddress(address)) {
		addressType.set("Ethereum");
		return true;
	}

	return false;
};

export const setToken = (symbol: string) => {
	token.update(
		() =>
			SUPPORTED_TOKENS.find((token) => token.symbol === symbol) as CENNZnetToken
	);
};
