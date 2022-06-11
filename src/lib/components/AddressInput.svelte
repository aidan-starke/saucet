<script lang="ts">
	import { isValidAddress, address } from "$lib/stores/address";
	import { fade } from "svelte/transition";
	import { Invalid } from "$lib/icons";
</script>

<input
	id="address"
	type="text"
	class="ml-6 mt-1 block h-10 w-[36rem] rounded border border-gray-400 pl-2 font-mono text-sm hover:border-[#9847FF]"
	placeholder="Enter a CENNZnet or Ethereum address"
	bind:value={$address}
/>
{#if !$isValidAddress}
	<div class="absolute ml-1.5 w-48 text-sm" transition:fade>
		<div
			class="align-content-center -top-4 m-5 flex rounded-md border border-solid border-yellow-400 bg-white p-2 text-center shadow danger-arrow-top"
		>
			<Invalid />

			<span class="ml-1.5 py-0.5">Invalid address!</span>
		</div>
	</div>
{/if}
