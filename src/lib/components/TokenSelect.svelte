<script lang="ts">
	import { SUPPORTED_TOKENS } from "$lib/constants";
	import { setToken } from "$lib/stores";

	let selectedToken = "CENNZ";

	$: {
		setToken(selectedToken);
	}
</script>

<div
	class="m-auto mt-1 block w-5/6 rounded border border-gray-400 pr-1 hover:border-[#9847FF]"
>
	<select
		bind:value={selectedToken}
		class="h-10 w-full cursor-pointer pl-2 text-sm font-bold"
	>
		{#each SUPPORTED_TOKENS as token (token.symbol)}
			<option value={token.symbol}>{token.symbol}</option>
		{/each}
	</select>
</div>
