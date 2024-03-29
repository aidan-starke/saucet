import type { Writable } from "svelte/store";
import type { CENNZnetNetwork } from "$lib/types";

import { network } from "$lib/stores/faucet";
import { NIKAU_API_URL, RATA_API_URL } from "$lib/constants";

import { derived } from "svelte/store";
import { Api } from "@cennznet/api";

export const api = derived<Writable<CENNZnetNetwork>, Api>(
	network,
	($network, set) => {
		let instance: Api;

		if ($network === "Rata")
			instance = new Api({
				provider: RATA_API_URL,
			});

		if ($network === "Nikau")
			instance = new Api({
				provider: NIKAU_API_URL,
			});

		instance!.isReady.then(() => {
			set(instance);
		});
	}
);
