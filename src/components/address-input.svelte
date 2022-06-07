<script lang="ts">
	import { setAddressType, address } from "@/stores/faucet";
	let input = "";

	$: {
		address.set(input);
		const isValidAddress = setAddressType(input);
		if (!isValidAddress) {
			// warn user
		}
	}
</script>

<input
	id="address"
	type="text"
	class="ml-6 mt-1 block h-10 w-[32rem] rounded border border-gray-400 pl-2 font-mono text-sm hover:border-[#9847FF]"
	placeholder="Enter a CENNZnet or Ethereum address"
	bind:value={input}
/>
