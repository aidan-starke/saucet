import type { CENNZnetNetwork, CENNZnetToken } from "$lib/types";

import { writable } from "svelte/store";
import { SUPPORTED_TOKENS } from "$lib/constants";

export const network = writable<CENNZnetNetwork>();
export const token = writable<CENNZnetToken>(SUPPORTED_TOKENS[0]);

export const setToken = (symbol: string) => {
	token.update(
		() =>
			SUPPORTED_TOKENS.find((token) => token.symbol === symbol) as CENNZnetToken
	);
};