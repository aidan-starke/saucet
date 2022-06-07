<script lang="ts">
	import type { CENNZnetNetwork } from "@/types";

	const NIKAU: CENNZnetNetwork = "Nikau";
	const RATA: CENNZnetNetwork = "Rata";

	let selectedNetwork = "Nikau";

	let networks = [NIKAU, RATA];
</script>

<div
	class="m-auto mt-1 block w-5/6 rounded border border-gray-400 pr-1 hover:border-[#9847FF]"
>
	<select
		bind:value={selectedNetwork}
		class="h-10 w-full cursor-pointer pl-2 text-sm font-bold"
	>
		{#each networks as network (network)}}
			<option value={network}>{network}</option>
		{/each}
	</select>
</div>
