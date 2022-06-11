import type { Balance as ApiBalance } from "@cennznet/types";
import type { BigSource, RoundingMode } from "big.js";
import type { GenericCoin } from "$lib/types";

import Big from "big.js";

type BalanceDescriptor = Pick<GenericCoin, "symbol" | "decimals">;
type BalanceSource = BigSource | Balance;

export default class Balance extends Big {
	coin: BalanceDescriptor;

	constructor(source: BigSource, coin: BalanceDescriptor) {
		super(source);
		this.coin = {
			decimals: 0,
			symbol: "",
			...coin,
		};
	}

	override abs(): Balance {
		return new Balance(super.abs(), this.coin);
	}

	override div(n: BalanceSource): Balance {
		return new Balance(super.div(n), this.coin);
	}

	override minus(n: BalanceSource): Balance {
		return new Balance(super.minus(n), this.coin);
	}

	override sub(n: BalanceSource): Balance {
		return new Balance(super.sub(n), this.coin);
	}

	override mod(n: BalanceSource): Balance {
		return new Balance(super.mod(n), this.coin);
	}

	override plus(n: BalanceSource): Balance {
		return new Balance(super.plus(n), this.coin);
	}

	override pow(n: number): Balance {
		return new Balance(super.pow(n), this.coin);
	}

	override prec(sd: number, rm?: RoundingMode): Balance {
		return new Balance(super.prec(sd, rm), this.coin);
	}

	override round(dp?: number, rm?: RoundingMode): Balance {
		return new Balance(super.round(dp, rm), this.coin);
	}

	override sqrt(): Balance {
		return new Balance(super.sqrt(), this.coin);
	}

	override mul(n: BalanceSource): Balance {
		return new Balance(super.mul(n), this.coin);
	}

	override times(n: BalanceSource): Balance {
		return new Balance(super.times(n), this.coin);
	}

	increase(n: number | string): Balance {
		return this.mul(1 + Number(n) / 100);
	}

	decrease(n: number | string): Balance {
		return this.mul(1 - Number(n) / 100);
	}

	toInput(): string {
		const { decimals } = this.coin;
		return this.div(Math.pow(10, decimals!)).toFixed(undefined, Big.roundDown);
	}

	toPretty(): string {
		const split = this.toInput().split(".");
		const pretty = split[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

		if (split[1]) return pretty.concat(".").concat(split[1]);
		return pretty;
	}

	static fromApiBalance(source: ApiBalance, coin: BalanceDescriptor): Balance {
		return new Balance(source.toString(), coin);
	}
}
