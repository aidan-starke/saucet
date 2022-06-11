<script lang="ts">
	import { CENNZ_LOGO } from "$lib/assets";
	import { Tooltip } from "$lib/components";
	import { addCENNZTokenToMetaMask, ensureEthereumChain } from "$lib/utils";
	import { extension, network } from "$lib/stores";

	const onHereClick = async () => {
		await ensureEthereumChain($extension, $network).then(() =>
			addCENNZTokenToMetaMask($extension)
		);
	};
</script>

<div
	class="my-6 flex items-start overflow-x-auto whitespace-nowrap pr-3.5 sm:overflow-auto sm:whitespace-normal"
>
	<img
		src={CENNZ_LOGO}
		class="lg:ml-g mt-2 ml-3 w-24 sm:ml-3 md:ml-6"
		alt="CENNZnet Logo"
	/>
	<div class="ml-8 text-lg lg:mr-2">
		<p class="mb-3">
			Bootstrap your wallet with <strong>2000</strong>
			<em class="token-symbol">CENNZ</em>
			and{" "}
			<em class="token-symbol">CPAY</em>
			across our testnet networks.
		</p>
		<p class="mb-3">
			<Tooltip message="This faucet is for the CENNZnet team">
				A&nbsp;<span class="fancy-link">legitimate GitHub account</span>&nbsp;
				is required.</Tooltip
			>
		</p>
		<p class="whitespace-normal">
			Click
			<span class="fancy-link" on:click={onHereClick}>here</span>
			to add
			<em class="token-symbol">CENNZ</em>
			token to MetaMask before using the faucet with an Ethereum address.
		</p>
		<slot />
	</div>
</div>
