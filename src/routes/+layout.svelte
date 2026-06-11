<script lang="ts">
	import { base } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a class="skip" href="#main">Skip to content</a>

<header class="site-header">
	<a class="logo" href="{base}/">
		<span class="logo-mark">🛡️</span>
		<span class="logo-text">Safe Snacks</span>
	</a>
	<nav>
		<a href="{base}/#categories">Shop</a>
		<a href="{base}/#facility">Nut-Free Facility</a>
		<a href="{base}/#guides">Guides</a>
	</nav>
</header>

<main id="main">
	{@render children()}
</main>

<footer class="site-footer">
	<p><strong>Safe Snacks</strong> — nut-free snacks you can trust.</p>
	<p class="fine">
		Always verify ingredient labels and allergen statements before purchasing. Product
		information shown here is illustrative.
	</p>
</footer>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		font-family: 'Inter', system-ui, sans-serif;
		color: #233044;
		background: #ffffff;
		-webkit-font-smoothing: antialiased;
	}

	:global(h1, h2, h3) {
		color: #1b3a66;
		line-height: 1.15;
	}

	.skip {
		position: absolute;
		left: -9999px;
	}
	.skip:focus {
		left: 1rem;
		top: 1rem;
		background: #1b3a66;
		color: #fff;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		z-index: 10;
	}

	.site-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.9rem clamp(1rem, 5vw, 3rem);
		background: #ffffff;
		border-bottom: 1px solid #eef2f7;
		position: sticky;
		top: 0;
		z-index: 5;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
	}
	.logo-mark {
		font-size: 1.4rem;
	}
	.logo-text {
		font-weight: 800;
		font-size: 1.15rem;
		color: #1b3a66;
		letter-spacing: -0.01em;
	}

	nav {
		display: flex;
		gap: clamp(0.8rem, 3vw, 1.6rem);
	}
	nav a {
		text-decoration: none;
		color: #44587a;
		font-weight: 600;
		font-size: 0.92rem;
	}
	nav a:hover {
		color: #1b3a66;
	}

	.site-footer {
		margin-top: 4rem;
		padding: 2rem clamp(1rem, 5vw, 3rem) 3rem;
		background: #f4f8fc;
		color: #44587a;
		font-size: 0.9rem;
	}
	.fine {
		font-size: 0.78rem;
		color: #7b8aa3;
		max-width: 48rem;
	}
</style>
