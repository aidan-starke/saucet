<script lang="ts">
	import type { CENNZnetNetwork } from "$lib/types";

	import { NETWORKS } from "$lib/constants";
	import { Chevron } from "$lib/icons";
	import { clickOutside } from "$lib/utils";
	import { network } from "$lib/stores";

	let isOpen = false;

	const onSelect = (selectedNetwork: string) => {
		network.set(selectedNetwork as CENNZnetNetwork);
		isOpen = false;
	};
</script>

<div class="w-5/6" use:clickOutside on:click_outside={() => (isOpen = false)}>
	<button
		id="networks"
		data-dropdown-toggle="network-dropdown"
		class="dropdown-button"
		type="button"
		on:click={() => (isOpen = !isOpen)}
	>
		<span class="flex w-[95%] items-center text-left">{$network}</span>
		<Chevron {isOpen} />
	</button>
	<div
		id="network-dropdown"
		class="z-10 hidden w-[11.23rem] divide-y divide-gray-100 rounded bg-white shadow sm:w-[12.9rem] md:w-[14.15rem] lg:w-[16.25rem] xl:w-[17.1rem]"
	>
		<ul class="py-1 text-sm" aria-labelledby="dropdownDefault">
			{#each Object.keys(NETWORKS) as network (network)}
				<li
					value={network}
					on:click={() => onSelect(network)}
					class="hover:bg-[#E4D1FF]"
				>
					<span class="dropdown-item">
						{network}
					</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
