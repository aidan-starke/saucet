<script lang="ts">
	export let message: string;
</script>

<span class="group relative z-0 flex">
	<slot />
	<span
		class="absolute top-0 mt-6 flex hidden w-64 flex-col items-center group-hover:flex"
	>
		<span
			class="-mb-2 h-3 w-3 rotate-45 border-l border-t border-[#E4D1FF] bg-white"
		/>
		<span
			class="whitespace-no-wrap relative z-10 rounded-md border border-[#E4D1FF] bg-white p-3 text-xs leading-4 shadow-lg"
			>{message}</span
		>
	</span>
</span>
