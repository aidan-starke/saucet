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

<div class="my-6 flex items-start">
	<img src={CENNZ_LOGO} class="mt-2 w-24 sm:ml-3 md:ml-6" alt="CENNZnet Logo" />
	<div class="ml-8 text-lg lg:mr-2">
		<p class="mb-3">
			Bootstrap your wallet with <strong>2000</strong>
			<em class="token-symbol">CENNZ</em>
			and{" "}
			<em class="token-symbol">CPAY</em>
			across our testnet networks.
		</p>
		<p class="sm:mb-6 md:mb-3">
			One claim per day per token is allowed.
			<br />
			<Tooltip
				message="Account must have at least 1 tweet, 15 followers, and be older than 1 month."
			>
				A&nbsp;<span class="fancy-link">legitimate Twitter account</span>&nbsp;
				is required.</Tooltip
			>
		</p>
		<p>
			Click
			<span class="fancy-link" on:click={onHereClick}>here</span>
			to add
			<em class="token-symbol">CENNZ</em>
			token to MetaMask before using the faucet with an Ethereum address.
		</p>
		<slot />
	</div>
</div>
