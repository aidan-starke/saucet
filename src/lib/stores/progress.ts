import type { TxStatus } from "$lib/types";

import { writable } from "svelte/store";

export const progressOpen = writable<boolean>(false);

export const txStatus = writable<TxStatus>();
