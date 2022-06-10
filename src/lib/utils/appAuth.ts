import { SvelteKitAuth } from "sk-auth";
import { GitHubOAuth2Provider } from "sk-auth/providers";
import { dev } from "$app/env";
import {
	GITHUB_CLIENT_ID,
	GITHUB_CLIENT_SECRET,
	OAUTH_JWT_SECRET_KEY,
} from "$lib/constants";

// Customize AuthConfig settings for development. Assumes callback URL
// of http://localhost:3000/api/auth/callback/github configured on GitHub.
const developmentOptions = dev
	? {
			host: "localhost:3000",
			protocol: "http",
			basePath: "/api/auth",
	  }
	: {
			host: "saucet.vercel.app",
			protocol: "https",
			basePath: "/api/auth",
	  };

export const appAuth = new SvelteKitAuth({
	providers: [
		new GitHubOAuth2Provider({
			clientId: GITHUB_CLIENT_ID,
			clientSecret: GITHUB_CLIENT_SECRET,
			profile(profile) {
				return { ...profile, provider: "github" };
			},
		}),
	],
	callbacks: {
		redirect: (uri) => uri, // Extend or introspect redirect callbacks
		// ...and access to other available AuthCallbacks as well
	},
	...developmentOptions,
	jwtSecret: OAUTH_JWT_SECRET_KEY,
});
