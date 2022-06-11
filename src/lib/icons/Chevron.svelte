<script lang="ts">
	export let isOpen = false;
</script>

<svg
	class={`mx-2 flex h-4 w-4 transition duration-300 ${isOpen && "rotate-180"}`}
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
