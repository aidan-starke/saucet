<script lang="ts">
	import type { GithubSession } from "$lib/types";

	import {
		AddressInput,
		Copy,
		TokenSelect,
		NetworkSelect,
		FaucetButton,
		FaucetProgress,
	} from "$lib/components";
	import {
		cennzAddress,
		network,
		progressOpen,
		token,
		txStatus,
	} from "$lib/stores";
	import { Balance, fetchBalance, supplyAccount } from "$lib/utils";
	import { session } from "$app/stores";

	const onSubmit = async () => {
		txStatus.set({ status: "in-progress" });
		progressOpen.set(true);

		try {
			const supplyResponse = await supplyAccount(
				$cennzAddress,
				$network,
				$token.assetId,
				($session as GithubSession).user?.login
			);

			if (supplyResponse.success) {
				const balanceRaw = await fetchBalance(
					$cennzAddress,
					$token.assetId,
					$network
				);

				return txStatus.set({
					status: "success",
					balance: Balance.fromApiBalance(balanceRaw, $token),
				});
			}

			txStatus.set({ status: "fail", error: `Error: ${supplyResponse.error}` });
		} catch (err: any) {
			txStatus.set({ status: "fail", error: err.message });
		}
	};
</script>

<div
	class="relative m-auto overflow-hidden rounded-lg bg-white p-2 shadow-lg sm:w-[32rem] md:w-[35rem] lg:w-[40rem]"
>
	<Copy />
	{#if $progressOpen}
		<FaucetProgress />
	{/if}
	<form on:submit|preventDefault={onSubmit}>
		<div class="h-3/4 w-full border-b border-gray-200 pb-8">
			<div class="flex w-full">
				<div class="w-1/2">
					<label class="faucet-label" for="tokens">Token</label>
					<TokenSelect />
				</div>
				<div class="w-1/2">
					<label class="faucet-label" for="tokens">Network</label>
					<NetworkSelect />
				</div>
			</div>
			<div class="m-auto mt-4 block w-full">
				<label class="faucet-label" for="address">Address</label>
				<AddressInput />
			</div>
		</div>
		<div class="my-8">
			<FaucetButton />
		</div>
	</form>
</div>
