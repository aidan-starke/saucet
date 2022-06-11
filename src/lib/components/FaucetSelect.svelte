<script lang="ts">
	import type { CENNZnetNetwork } from "$lib/types";

	import { Chevron } from "$lib/icons";

	export let defaultOption: string;
	export let id: string;
	export let onSelect: (option: CENNZnetNetwork | string) => void;
	export let options: string[];

	let isOpen = false;
	let selectedOption: string;

	const onOptionClick = (option: string) => {
		selectedOption = option;
		onSelect(option);
	};
</script>

<div class="w-5/6">
	<button
		{id}
		data-dropdown-toggle={`dropdown-${id}`}
		class="mt-1 ml-6 block flex h-12 w-full appearance-none items-center rounded border border-gray-400 px-4 py-2.5 pr-1 text-sm font-bold hover:border-[#9847FF]"
		type="button"
		on:click={() => (isOpen = !isOpen)}
	>
		<span class="w-[95%] text-left">{selectedOption ?? defaultOption}</span>
		<Chevron {isOpen} />
	</button>
	<div
		id={`dropdown-${id}`}
		class="z-10 hidden w-[11.23rem] divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700 sm:w-[12.9rem] md:w-[14.15rem] lg:w-[16.25rem] xl:w-[17.1rem]"
	>
		<ul
			class="py-1 text-sm text-gray-700 dark:text-gray-200"
			aria-labelledby="dropdownDefault"
		>
			{#each options as option (option)}
				<li value={option} on:click={() => onOptionClick(option)}>
					<span
						class="block px-4 py-2 font-bold hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
						>{option}</span
					>
				</li>
			{/each}
		</ul>
	</div>
</div>
