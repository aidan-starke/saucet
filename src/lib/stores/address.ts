import type { Writable } from "svelte/store";

import { isCENNZAddress, isEthereumAddress } from "$lib/utils";
import { writable, derived } from "svelte/store";
import { cvmToAddress } from "@cennznet/types/utils";

export const address = writable<string>();

export const cennzAddress = derived<Writable<string>, string>(
	address,
	($address) =>
		isEthereumAddress($address) ? cvmToAddress($address) : $address
);

export const isValidAddress = derived<Writable<string>, boolean>(address, ($address) => {
	if (!$address?.length) return true;

	if (isCENNZAddress($address)) 
		return true;
	
	if (isEthereumAddress($address)) 
		return true;

	return false;
})