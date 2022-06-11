<script lang="ts">
	import type { GithubSession } from "$lib/types";
	import { fade } from "svelte/transition";
	import { session } from "$app/stores";
	import { address, isValidAddress } from "$lib/stores/address";

	$: disabled = !$isValidAddress || !$address;

	$: githubAccount = ($session as GithubSession).user?.login ?? undefined;

	$: buttonText = githubAccount ? "send tokens" : "sign in with github";
</script>

{#if githubAccount}
	<button
		class="text-md m-auto block w-64 rounded border border-[#9847FF] py-3 px-6 text-center font-semibold uppercase text-[#9847FF] transition duration-300 enabled:hover:border-white enabled:hover:bg-[#9847FF] enabled:hover:text-white"
		transition:fade
		{disabled}
		type="submit"
	>
		{buttonText}
	</button>
	<div
		class="mx-auto mt-2 text-center text-sm font-normal italic text-gray-400"
	>
		<a
			class="hover:cursor-pointer hover:underline"
			transition:fade
			href="/api/auth/signout"
		>
			Sign out {githubAccount}
		</a>
	</div>
{:else}
	<a
		class="text-md m-auto block w-64 rounded border border-[#9847FF] py-3 px-6 text-center font-semibold uppercase text-[#9847FF] transition duration-300 hover:border-white hover:bg-[#9847FF] hover:text-white"
		transition:fade
		href={"/api/auth/signin/github?redirect=/"}>{buttonText}</a
	>
{/if}
