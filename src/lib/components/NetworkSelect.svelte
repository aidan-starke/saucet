<script lang="ts">
	import { NETWORKS } from "$lib/constants";
	import { network } from "$lib/stores";
</script>

<div class="faucet-select-wrapper">
	<select bind:value={$network} class="faucet-select">
		{#each Object.keys(NETWORKS) as network (network)}}
			<option value={network}>{network}</option>
		{/each}
	</select>
</div>
