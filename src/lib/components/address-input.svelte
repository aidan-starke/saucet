<script lang="ts">
	import { isValidAddress, address } from "$lib/stores/address";
	import { fade } from "svelte/transition";
</script>

<input
	id="address"
	type="text"
	class="ml-6 mt-1 block h-10 w-[32rem] rounded border border-gray-400 pl-2 font-mono text-sm hover:border-[#9847FF]"
	placeholder="Enter a CENNZnet or Ethereum address"
	bind:value={$address}
/>
{#if !$isValidAddress}
	<div class="absolute ml-1.5 w-48 text-sm" transition:fade>
		<div
			class="align-content-center -top-4 m-5 flex rounded-md border border-solid border-yellow-400 bg-white p-2 text-center shadow danger-arrow-top"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
				/>
			</svg>

			<span class="ml-1.5 py-0.5">Invalid address!</span>
		</div>
	</div>
{/if}
