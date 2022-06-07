<script lang="ts">
	import { CENNZ_LOGO } from "@/assets";
</script>

<div class="my-6 mr-6 flex items-start">
	<img src={CENNZ_LOGO} class="mt-2 ml-3 w-20" alt="CENNZnet Logo" />
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
			A
			<span
				class="cursor-pointer border-[#E4D1FF] text-[#9847FF] hover:border-b"
				>legitimate Twitter account</span
			> is required.
		</p>
		<p>
			Click <span
				class="cursor-pointer border-[#E4D1FF] text-[#9847FF] hover:border-b"
				>here</span
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
