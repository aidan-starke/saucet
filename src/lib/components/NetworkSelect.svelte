<script lang="ts">
	import { NETWORKS } from "$lib/constants";
	import { network } from "$lib/stores";
</script>

<div
	class="m-auto mt-1 block w-5/6 rounded border border-gray-400 pr-1 hover:border-[#9847FF]"
>
	<select
		bind:value={$network}
		class="h-10 w-full cursor-pointer pl-2 text-sm font-bold"
	>
		{#each Object.keys(NETWORKS) as network (network)}}
			<option value={network}>{network}</option>
		{/each}
	</select>
</div>
