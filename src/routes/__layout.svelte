<script lang="ts">
	import "@/app.css";
	import { onMount } from "svelte";
	import detectEthereumProvider from "@metamask/detect-provider";
	import { extension } from "@/stores/metamask";

	onMount(() => {
		detectEthereumProvider({ mustBeMetaMask: true }).then(extension.set);
	});
</script>

<svelte:head>
	<title>CENNZnet Svelte Faucet</title>
</svelte:head>

<div
	class="z-0 flex h-screen h-screen items-center overflow-auto bg-[#f5ecff] bg-[url('@/assets/bg.svg')] font-sans"
>
	<slot />
</div>
