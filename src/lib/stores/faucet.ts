import type { CENNZnetNetwork, CENNZnetToken } from "$lib/types";

import { writable } from "svelte/store";
import { SUPPORTED_TOKENS } from "$lib/constants";

export const network = writable<CENNZnetNetwork>("Nikau");
export const token = writable<CENNZnetToken>(SUPPORTED_TOKENS[0]);
