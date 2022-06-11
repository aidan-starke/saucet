<script lang="ts">
	import type { GithubSession } from "$lib/types";

	import {
		AddressInput,
		Copy,
		TokenSelect,
		NetworkSelect,
		FaucetButton,
	} from "$lib/components";
	import { cennzAddress } from "$lib/stores/address";
	import { network, token } from "$lib/stores/faucet";
	import { supplyAccount } from "$lib/utils";
	import { session } from "$app/stores";

	const onSubmit = async () => {
		try {
			const response = await supplyAccount(
				$cennzAddress,
				$network,
				$token.assetId,
				($session as GithubSession).user?.login
			);

			console.log(response);
		} catch (err: any) {
			console.warn(err.message);
		}
	};
</script>

<div
	class="relative m-auto w-[40rem] overflow-hidden rounded-lg bg-white p-2 shadow-lg"
>
	<Copy />
	<form on:submit|preventDefault={onSubmit}>
		<div class="h-3/4 w-full border-b border-gray-200 pb-8">
			<div class="flex w-full">
				<div class="w-1/2">
					<label
						class="text-md mb-1 ml-6 font-semibold uppercase text-[#9847FF]"
						for="tokens">Token</label
					>
					<TokenSelect />
				</div>
				<div class="w-1/2">
					<label
						class="text-md mb-1 ml-6 font-semibold uppercase text-[#9847FF]"
						for="tokens">Network</label
					>
					<NetworkSelect />
				</div>
			</div>
			<div class="m-auto mt-4 block w-full">
				<label
					class="text-md mb-1 ml-6 font-semibold uppercase text-[#9847FF]"
					for="address">Address</label
				>
				<AddressInput />
			</div>
		</div>
		<div class="my-8">
			<FaucetButton />
		</div>
	</form>
</div>
