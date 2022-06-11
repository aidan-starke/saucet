<script lang="ts">
	import "flowbite/dist/flowbite.css";
	import "$lib/app.css";

	import type { MetaMaskInpageProvider } from "@metamask/providers";

	import { onMount } from "svelte";
	import detectEthereumProvider from "@metamask/detect-provider";
	import { extension } from "$lib/stores";

	onMount(() => {
		detectEthereumProvider({ mustBeMetaMask: true }).then((provider) =>
			extension.set(provider as MetaMaskInpageProvider)
		);
	});
</script>

<svelte:head>
	<title>CENNZnet Svelte Faucet</title>
</svelte:head>

<div
	class="flex h-screen h-screen items-center overflow-auto bg-[#f5ecff] bg-[url('$lib/assets/bg.svg')] font-sans"
>
	<slot />
</div>
