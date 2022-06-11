<script lang="ts">
	import { SUPPORTED_TOKENS } from "$lib/constants";
	import { setToken } from "$lib/stores";

	let selectedToken = "CENNZ";

	$: {
		setToken(selectedToken);
	}
</script>

<div class="faucet-select-wrapper">
	<select bind:value={selectedToken} class="faucet-select">
		{#each SUPPORTED_TOKENS as token (token.symbol)}
			<option value={token.symbol}>{token.symbol}</option>
		{/each}
	</select>
</div>
