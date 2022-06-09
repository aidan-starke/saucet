<script lang="ts">
	import { fade } from "svelte/transition";
	let validAccount = false;

	$: buttonText = validAccount ? "send tokens" : "sign in with twitter";

	const handleButtonClick = () => {
		if (!validAccount) return (validAccount = true);
	};
</script>

<button
	class="m-auto block rounded border border-[#9847FF] py-3 px-6 font-semibold uppercase text-[#9847FF] transition duration-300 hover:border-white hover:bg-[#9847FF] hover:text-white"
	transition:fade
	on:click={handleButtonClick}
>
	{buttonText}
</button>
{#if validAccount}
	<div
		class="mx-auto my-2 text-center text-sm font-normal italic text-gray-400 underline hover:cursor-pointer"
		transition:fade
		on:click={() => (validAccount = false)}
	>
		Sign out @twitterhandle
	</div>
{/if}
