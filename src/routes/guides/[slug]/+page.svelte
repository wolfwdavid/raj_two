<script lang="ts">
	import { base } from '$app/paths';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.guide.title} — Safe Snacks</title>
</svelte:head>

<article class="page">
	<nav class="crumbs"><a href="{base}/">Home</a> / Guides</nav>
	<div class="banner" aria-hidden="true">{data.guide.emoji}</div>
	<h1>{data.guide.title}</h1>
	{#each data.guide.body as para, i (i)}
		<p>{para}</p>
	{/each}
</article>

<style>
	.page {
		max-width: 44rem;
		margin: 0 auto;
		padding: 1.6rem clamp(1rem, 5vw, 3rem) 0;
	}

	.crumbs {
		font-size: 0.85rem;
		color: #7b8aa3;
		margin-bottom: 1rem;
	}
	.crumbs a {
		color: #2458a6;
		text-decoration: none;
	}

	.banner {
		background: linear-gradient(135deg, #fdf6e7, #ffe9c7);
		border-radius: 16px;
		font-size: 4rem;
		display: grid;
		place-items: center;
		padding: 2rem 0;
		margin-bottom: 1.4rem;
	}

	h1 {
		font-size: clamp(1.6rem, 4.5vw, 2.2rem);
		margin: 0 0 1rem;
	}

	p {
		color: #44587a;
		line-height: 1.65;
		font-size: 1.02rem;
	}
</style>
