import type { Chain } from "@/types";
import type { Writable } from "svelte/store";

import { isCENNZAddress, isEthereumAddress } from "@/utils";
import { writable, derived } from "svelte/store";
import { cvmToAddress } from "@cennznet/types/utils";

export const address = writable<string>();

export const addressType = writable<Chain>();

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
