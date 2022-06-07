<script lang="ts">
	import "@/app.css";
</script>

<svelte:head>
	<title>CENNZnet Svelte Faucet</title>
</svelte:head>

<div
	class="z-0 flex h-screen h-screen items-center overflow-auto bg-[#f5ecff] bg-[url('@/assets/bg.svg')] font-sans"
>
	<slot />
</div>
