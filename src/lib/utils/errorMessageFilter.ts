import type { ExtrinsicError } from "$lib/types";

export default function errorMessageFilter(
	error: ExtrinsicError
): ExtrinsicError {
	const errors: Record<string, string> = {
		"Invalid Transaction (0)": "Bad signature",
		"Invalid Transaction (1)": "Nonce too low",
		"Invalid Transaction (2)": "Nonce too high",
		"Invalid Transaction (3)": "Invalid Transaction (3)",
		"Invalid Transaction (255)":
			"Block is full, no more extrinsics can be applied",
		"Priority is too low":
			"A transaction in your account with the same nonce is stuck in the pool",
	};

	const filteredError = error;

	Object.keys(errors).forEach((key) => {
		if (error.message.includes(key)) {
			filteredError.message = errors[key];
		}
	});

	return filteredError;
}
