<script lang="ts">
	// import { address, addressType, network} from "@/stores/faucet";
	import Copy from "@/components/copy.svelte";
	import TokenSelect from "@/components/token-select.svelte";
	import NetworkSelect from "@/components/network-select.svelte";
	import AddressInput from "@/components/address-input.svelte";
	import FaucetButton from "@/components/faucet-button.svelte";
</script>

<div
	class="relative m-auto w-2/5 overflow-hidden rounded-lg bg-white p-2 shadow-lg"
>
	<Copy />
	<form class="h-3/4 w-full border-b border-gray-200 pb-8">
		<div class="flex w-full">
			<div class="w-1/2">
				<label
					class="text-md mb-1 ml-6 font-semibold uppercase text-[#9847FF]"
					for="tokens">Token</label
				>
				<TokenSelect />
			</div>
			<div class="w-1/2">
				<label
					class="text-md mb-1 ml-6 font-semibold uppercase text-[#9847FF]"
					for="tokens">Network</label
				>
				<NetworkSelect />
			</div>
		</div>
		<div class="m-auto mt-4 block w-full">
			<label
				class="text-md mb-1 ml-6 font-semibold uppercase text-[#9847FF]"
				for="address">Address</label
			>
			<AddressInput />
		</div>
	</form>
	<div class="my-6">
		<FaucetButton />
	</div>
</div>
