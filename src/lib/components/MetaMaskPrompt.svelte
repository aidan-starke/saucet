<script lang="ts">
	import { extension, network } from "$lib/stores";
	import { addCENNZTokenToMetaMask, ensureEthereumChain } from "$lib/utils";

	export let isCENNZ: boolean;

	const onHereClick = async () => {
		if (isCENNZ)
			return ensureEthereumChain($extension, $network).then(
				addCENNZTokenToMetaMask
			);

		return ensureEthereumChain($extension, $network);
	};
</script>

<div>
	{#if isCENNZ}
		Click
		<span class="fancy-link" on:click={onHereClick}>here</span>
		to add
		<em class="token-symbol">CENNZ</em>
		to your wallet.
	{:else}
		Click
		<span class="fancy-link" on:click={onHereClick}>here</span>
		to switch to CENNZnet {$network} in MetaMask.
	{/if}
</div>
