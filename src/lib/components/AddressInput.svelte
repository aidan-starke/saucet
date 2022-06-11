<script lang="ts">
	import { isValidAddress, address, txStatus } from "$lib/stores";
	import { fade } from "svelte/transition";
	import { Invalid } from "$lib/icons";

	$: displayAvatar = $address && $isValidAddress;
</script>

<span
	class="relative ml-6 mt-1 flex h-12 rounded border-gray-200 font-mono text-sm hover:border-[#9847FF] sm:w-[28.25rem] md:w-[31.1rem] lg:w-[36rem]"
>
	{#if displayAvatar}
		<div
			class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
		>
			<img
				src={`https://avatars.dicebear.com/api/gridy/${parseInt(
					$address.slice(2, 10),
					16
				)}.svg`}
				class="h-8"
				alt="avatar"
				transition:fade
			/>
		</div>
	{/if}
	<input
		id="address"
		type="text"
		class={`inline-flex h-full font-mono rounded sm:text-xs md:text-[0.82rem] lg:text-sm tracking-wider hover:border-[#9847FF] pl-2 w-full bg-transparent ${
			displayAvatar && "pl-14"
		}`}
		placeholder="Enter a CENNZnet or Ethereum address"
		bind:value={$address}
	/>
</span>
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
