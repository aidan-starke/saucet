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
		<span
			class="cursor-pointer border-[#E4D1FF] text-[#9847FF] hover:border-b"
			on:click={onHereClick}>here</span
		>
		to add
		<em
			class="inline-block rounded-md border-2 border-[#E4D1FF] py-1 px-1.5 text-sm font-bold leading-5 text-[#9847FF]"
			>CENNZ</em
		>
		to your wallet.
	{:else}
		Click
		<span
			class="cursor-pointer border-[#E4D1FF] text-[#9847FF] hover:border-b"
			on:click={onHereClick}>here</span
		>
		to switch to CENNZnet {$network} in MetaMask.
	{/if}
</div>
