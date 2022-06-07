import type { Chain, CENNZnetNetwork } from "@/types";
import { writable } from "svelte/store";

export const address = writable<string>();
export const addressType = writable<Chain>();
export const network = writable<CENNZnetNetwork>();
