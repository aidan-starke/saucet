import { SvelteKitAuth } from "sk-auth";
import { GitHubOAuth2Provider } from "sk-auth/providers";

import {
	GITHUB_CLIENT_ID,
	GITHUB_CLIENT_SECRET,
	OAUTH_JWT_SECRET_KEY,
} from "@/constants";

// Customize AuthConfig settings for development. Assumes callback URL
// of http://localhost:3000/api/auth/callback/github configured on GitHub.
const developmentOptions = !process.env.PROD
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
		// new class extends GitHubOAuth2Provider {
		//   constructor() {
		//     super({
		//       clientId: GITHUB_CLIENT_ID,
		//   clientSecret: GITHUB_CLIENT_SECRET,
		//   profile(profile) {
		//     return { ...profile, provider: "github" };
		//   },
		//     })
		//   }
		//   getRequestToken = async (auth, host): Promise<any> => {
		//     const { url, ...oauthResult } = await (new TwitterApi({
		//       appKey: this.config.apiKey,
		//       appSecret: this.config.apiSecret
		//     })).readOnly.generateAuthLink(
		//       encodeURIComponent(this.getCallbackUri()), { authAccessType: 'read' }
		//     );
		//     return {
		//       oauthToken: oauthResult.oauth_token,
		//       oauthTokenSecret: oauthResult.oauth_token_secret,
		//       oauthCallbackConfirmed: oauthResult.oauth_callback_confirmed
		//     };
		//   }
		//   getTokens = async (oauthToken: string, oauthVerifier: string): Promise<any> => {
		//     const endpoint = 'https://api.twitter.com/oauth/access_token';

		//     const data = {
		//       oauth_consumer_key: this.config.apiKey,
		//       oauth_token: oauthToken,
		//       oauth_verifier: oauthVerifier,
		//     };

		//     const response: any = await fetch(`${endpoint}?${new URLSearchParams(data)}`, { method: 'POST' });
		//     // This endpoint returns query string like key-value pairs
		//     // https://developer.twitter.com/en/docs/authentication/api-reference/access_token
		//     return Object.fromEntries([...(new URLSearchParams(await response.text()))]);
		//   }
		//   getCallbackUri(): string {
		//     return `${settings.AUTH_CALLBACK_URI_PREFIX}twitter`;
		//   }
		// },
	],
	callbacks: {
		redirect: (uri) => uri, // Extend or introspect redirect callbacks
		// ...and access to other available AuthCallbacks as well
	},
	...developmentOptions,
	jwtSecret: OAUTH_JWT_SECRET_KEY,
});
