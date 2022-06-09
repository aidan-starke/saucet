<script lang="ts">
	import type { GithubSession } from "@/types";

	import { fade } from "svelte/transition";
	import { session } from "$app/stores";

	$: githubAccount = ($session as GithubSession).user?.login ?? undefined;

	$: buttonText = githubAccount ? "send tokens" : "sign in with github";

	$: {
		console.log("debugging github account, session:", $session)
		console.log("debugging github account, githubAccount:", $session)
	}
</script>

<a
	class="text-md m-auto block w-64 rounded border border-[#9847FF] py-3 px-6 text-center font-semibold uppercase text-[#9847FF] transition duration-300 hover:border-white hover:bg-[#9847FF] hover:text-white"
	transition:fade
	href="/api/auth/signin/github?redirect=/"
>
	{buttonText}
</a>

{#if githubAccount}
	<div
		class="mx-auto my-2 text-center text-sm font-normal italic text-gray-400"
	>
		<a
			class="hover:cursor-pointer hover:underline"
			transition:fade
			href="/api/auth/signout"
		>
			Sign out {githubAccount}
		</a>
	</div>
{/if}
