<script lang="ts">
	import { fade } from "svelte/transition";
	import { Failure, Loading, Success } from "$lib/icons";
	import { progressOpen, token, txStatus } from "$lib/stores";
	import { SuccessResponse } from "$lib/components";

	let title: string;

	$: {
		switch ($txStatus.status) {
			case "in-progress":
				title = "Faucet Is In Progress";
				break;
			case "success":
				title = "Faucet Tx Completed";
				break;
			case "fail":
				title = "Faucet Tx Failed";
				break;
		}
	}

	const onDismiss = () => {
		txStatus.set({ status: "" });
		progressOpen.set(false);
	};
</script>

<div
	class="pointer-events-auto absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-white/90 p-5 text-center text-sm backdrop-blur-[2px]"
	transition:fade
>
	<div class="flex flex-col items-center justify-center">
		<div class="mb-2" transition:fade>
			{#if $txStatus.status === "in-progress"}
				<Loading />
			{:else if $txStatus.status === "success"}
				<Success />
			{:else}
				<Failure />
			{/if}
		</div>

		<div class="text-center text-lg font-bold uppercase text-[#9847FF]">
			{title}
		</div>
		<div class="mt-2 leading-5">
			{#if $txStatus.status === "in-progress"}
				<div>
					Retrieving <em class="token-symbol">{$token.symbol}</em> from the Faucet
				</div>
			{:else if $txStatus.status === "success"}
				<SuccessResponse />
			{:else}
				{$txStatus?.error}
			{/if}
		</div>

		{#if $txStatus.status !== "in-progress"}
			<button
				class="mt-8 flex h-10 w-28 cursor-pointer items-center justify-center rounded border border-transparent bg-[#9847FF] text-center text-center font-bold uppercase text-white transition duration-300 hover:border-[#9847FF] hover:bg-white hover:text-[#9847FF]"
				on:click={onDismiss}
				type="button"
				transition:fade>Dismiss</button
			>
		{/if}
	</div>
</div>
