import type { MetaMaskInpageProvider } from "@metamask/providers";

import { writable } from "svelte/store";

export const extension = writable<MetaMaskInpageProvider>();
