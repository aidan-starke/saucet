import type { Chain, CENNZnetNetwork } from "@/types";

import { writable } from "svelte/store";
import { isCENNZAddress, isEthereumAddress } from "@/utils";

export const address = writable<string>();
export const addressType = writable<Chain>();
export const network = writable<CENNZnetNetwork>();

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
