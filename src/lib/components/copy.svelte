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

<div class="my-6 mr-6 flex items-start">
	<img src={CENNZ_LOGO} class="mt-2 ml-6 w-24" alt="CENNZnet Logo" />
	<div class="ml-8 text-lg">
		<p class="mb-3">
			Bootstrap your wallet with <strong>2000</strong>
			<em
				class="inline-block rounded-md border-2 border-[#E4D1FF] py-1 px-1.5 text-sm font-bold leading-5 text-[#9847FF]"
				>CENNZ</em
			>
			and{" "}
			<em
				class="inline-block rounded-md border-2 border-[#E4D1FF] py-1 px-1.5 text-sm font-bold leading-5 text-[#9847FF]"
				>CPAY</em
			>
			across our testnet networks.
		</p>
		<p class="mb-3">
			One claim per day per token is allowed.
			<br />
			<Tooltip
				message="Account must have at least 1 tweet, 15 followers, and be older than 1 month."
			>
				A&nbsp;<span
					class="cursor-pointer border-[#E4D1FF] text-[#9847FF] hover:border-b"
					>legitimate Twitter account</span
				>&nbsp; is required.</Tooltip
			>
		</p>
		<p>
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
			token to MetaMask before using the faucet with an Ethereum address.
		</p>
		<slot />
	</div>
</div>
