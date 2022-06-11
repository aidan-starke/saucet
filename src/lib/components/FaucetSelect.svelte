<script lang="ts">
	import type { CENNZnetNetwork } from "$lib/types";

	export let defaultOption: string;
	export let id: string;
	export let onSelect: (option: CENNZnetNetwork | string) => void;
	export let options: string[];

	let selectedOption: string;

	const onOptionClick = (option: string) => {
		selectedOption = option;
		onSelect(option);
	};
</script>

<button
	{id}
	data-dropdown-toggle={`dropdown-${id}`}
	class="mt-1 ml-6 block flex h-12 appearance-none items-center rounded border border-gray-400 px-4 py-2.5 pr-1 text-sm font-bold hover:border-[#9847FF] sm:w-[12.7rem] md:w-56 lg:w-[16.4rem]"
	type="button"
>
	<span class="w-[95%] text-left">{selectedOption ?? defaultOption}</span>
	<svg
		class="ml-2 flex h-4 w-4"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M19 9l-7 7-7-7"
		/>
	</svg>
</button>
<div
	id={`dropdown-${id}`}
	class="z-10 hidden divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700 sm:w-[12.7rem] md:w-56 lg:w-[16.4rem]"
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
