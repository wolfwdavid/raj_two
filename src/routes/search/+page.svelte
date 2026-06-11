<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/state';
	import SearchBar from '$lib/SearchBar.svelte';
	import ProductCard from '$lib/ProductCard.svelte';
	import { products, searchProducts } from '$lib/data/products';

	// searchParams are only readable in the browser — the page itself is prerendered
	const query = $derived(browser ? (page.url.searchParams.get('q') ?? '') : '');
	const results = $derived(
		query === 'facility' ? products.filter((p) => p.nutFreeFacility) : searchProducts(query)
	);
</script>

<svelte:head>
	<title>Search — Safe Snacks</title>
</svelte:head>

<div class="page">
	<div class="bar">
		<SearchBar initial={query} />
	</div>

	{#if query}
		<h1>
			{results.length}
			{results.length === 1 ? 'snack' : 'snacks'} for “{query === 'facility'
				? 'nut-free facility'
				: query}”
		</h1>
	{:else}
		<h1>What are you snacking on?</h1>
	{/if}

	<div class="grid">
		{#each results as p (p.id)}
			<ProductCard product={p} />
		{/each}
	</div>
</div>

<style>
	.page {
		max-width: 72rem;
		margin: 0 auto;
		padding: 1.6rem clamp(1rem, 5vw, 3rem) 0;
	}

	.bar {
		display: flex;
		justify-content: center;
		margin-bottom: 1.6rem;
	}

	h1 {
		font-size: clamp(1.2rem, 3.4vw, 1.6rem);
		margin: 0 0 1.2rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
		gap: 1rem;
	}
</style>
