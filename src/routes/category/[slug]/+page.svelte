<script lang="ts">
	import { base } from '$app/paths';
	import ProductCard from '$lib/ProductCard.svelte';

	let { data } = $props();

	let facilityOnly = $state(false);
	const visible = $derived(
		facilityOnly ? data.items.filter((p) => p.nutFreeFacility) : data.items
	);
</script>

<svelte:head>
	<title>{data.category.name} — Safe Snacks</title>
</svelte:head>

<div class="page">
	<nav class="crumbs"><a href="{base}/">Home</a> / {data.category.name}</nav>
	<header class="head">
		<h1><span aria-hidden="true">{data.category.emoji}</span> {data.category.name}</h1>
		<label class="filter">
			<input type="checkbox" bind:checked={facilityOnly} />
			Nut-free facility only
		</label>
	</header>

	<div class="grid">
		{#each visible as p (p.id)}
			<ProductCard product={p} />
		{:else}
			<p class="empty">No snacks match this filter yet.</p>
		{/each}
	</div>
</div>

<style>
	.page {
		max-width: 72rem;
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

	.head {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.8rem;
		margin-bottom: 1.4rem;
	}
	h1 {
		margin: 0;
		font-size: clamp(1.5rem, 4vw, 2rem);
	}

	.filter {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		font-weight: 600;
		color: #44587a;
		cursor: pointer;
	}
	.filter input {
		accent-color: #2458a6;
		width: 1.05rem;
		height: 1.05rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
		gap: 1rem;
	}
	.empty {
		color: #7b8aa3;
	}
</style>
