<script lang="ts">
	import { address, extension, token, txStatus } from "$lib/stores";
	import { isEthereumAddress } from "$lib/utils";
	import { MetaMaskPrompt } from "$lib/components";

	$: isCENNZ = $token.symbol === "CENNZ";
	$: isMetamask = isEthereumAddress($address);
</script>

<div class="mt-4">
	<div class="mb-4">
		<em
			class="inline-block rounded-md border-2 border-[#E4D1FF] py-1 px-1.5 text-sm font-bold leading-5 text-[#9847FF]"
			>{$token.symbol}</em
		>
		sent successfully!
	</div>
	{#if $txStatus?.balance}
		<div class="mb-4">
			Your new account balance is <strong class="font-mono"
				>{$txStatus.balance.toPretty()}</strong
			>
			<em
				class="inline-block rounded-md border-2 border-[#E4D1FF] py-1 px-1.5 text-sm font-bold leading-5 text-[#9847FF]"
				>{$token.symbol}</em
			>
		</div>
	{/if}
	{#if extension && isMetamask}
		<div class="mb-2">
			Can&apos;t see it in your MetaMask wallet?
			<br />
			<MetaMaskPrompt {isCENNZ} />
		</div>
	{/if}
</div>
