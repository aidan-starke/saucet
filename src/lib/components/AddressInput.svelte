<script lang="ts">
	import { isValidAddress, address } from "$lib/stores";
	import { fade } from "svelte/transition";
	import { Invalid } from "$lib/icons";

	$: displayAvatar = $address && $isValidAddress;
</script>

<span
	class="relative ml-6 mt-1 flex h-12 min-h-full rounded border-gray-200 font-mono text-sm hover:border-[#9847FF] sm:w-[28.25rem] md:w-[31.1rem] lg:w-[35.75rem] xl:w-[37.6rem]"
>
	{#if displayAvatar}
		<div
			class="pointer-events-none absolute inset-y-0 left-0 mt-3 flex items-center pl-3 lg:mt-0"
		>
			<img
				src={`https://avatars.dicebear.com/api/gridy/${parseInt(
					$address.slice(2, 10),
					16
				)}.svg`}
				class="h-8"
				alt="avatar"
				in:fade
			/>
		</div>
	{/if}
	<textarea
		id="address"
		type="text"
		class={`block h-16 w-full overflow-clip rounded bg-transparent bg-clip-padding px-3 font-mono tracking-wider hover:border-[#9847FF] lg:h-full lg:pt-3 ${
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
