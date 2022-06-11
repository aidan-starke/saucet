<script lang="ts">
	import type { CENNZnetToken } from "$lib/types";

	import { SUPPORTED_TOKENS } from "$lib/constants";
	import { Chevron } from "$lib/icons";
	import { clickOutside } from "$lib/utils";
	import { token } from "$lib/stores";

	let isOpen = false;

	const onSelect = (selectedToken: CENNZnetToken) => {
		token.set(selectedToken);
		isOpen = false;
	};
</script>

<div class="w-5/6" use:clickOutside on:click_outside={() => (isOpen = false)}>
	<button
		id="tokens"
		data-dropdown-toggle="token-dropdown"
		class="dropdown-button"
		type="button"
		on:click={() => (isOpen = !isOpen)}
	>
		<span class="flex w-[95%] items-center text-left"
			><img
				src={$token.logo}
				class="mr-2 h-6 w-6"
				alt={$token.symbol}
			/>{$token.symbol}</span
		>
		<Chevron {isOpen} />
	</button>
	<div
		id="token-dropdown"
		class="z-10 hidden w-[11.23rem] divide-y divide-gray-100 rounded bg-white shadow sm:w-[12.9rem] md:w-[14.15rem] lg:w-[16.25rem] xl:w-[17.1rem]"
	>
		<ul class="py-1 text-sm" aria-labelledby="dropdownDefault">
			{#each SUPPORTED_TOKENS as token (token.symbol)}
				<li
					value={token.symbol}
					on:click={() => onSelect(token)}
					class="hover:bg-[#E4D1FF]"
				>
					<span class="dropdown-item">
						<img src={token.logo} class="mr-2 h-6 w-6" alt={token.symbol} />
						{token.symbol}
					</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
