<script lang="ts">
	import type { Product } from '$lib/data/products';

	let { product }: { product: Product } = $props();
</script>

<article class="card">
	<div class="art" aria-hidden="true">{product.emoji}</div>
	<div class="info">
		<h3>{product.name}</h3>
		<p class="brand">{product.brand}</p>
		<p class="blurb">{product.blurb}</p>
		<div class="meta">
			<span class="price">${product.price.toFixed(2)}</span>
			{#if product.nutFreeFacility}
				<span class="badge facility">Nut-free facility</span>
			{:else}
				<span class="badge line">Peanut-free line</span>
			{/if}
		</div>
	</div>
</article>

<style>
	.card {
		background: #ffffff;
		border: 1px solid #eef2f7;
		border-radius: 16px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition: box-shadow 0.15s ease;
	}
	.card:hover {
		box-shadow: 0 8px 24px rgba(27, 58, 102, 0.1);
	}

	.art {
		background: #fdf6e7;
		font-size: 3rem;
		display: grid;
		place-items: center;
		padding: 1.4rem 0;
	}

	.info {
		padding: 0.9rem 1rem 1.1rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		flex: 1;
	}

	h3 {
		margin: 0;
		font-size: 1rem;
	}
	.brand {
		margin: 0;
		font-size: 0.8rem;
		color: #7b8aa3;
		font-weight: 600;
	}
	.blurb {
		margin: 0.25rem 0 0;
		font-size: 0.84rem;
		color: #44587a;
		flex: 1;
	}

	.meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		margin-top: 0.7rem;
	}
	.price {
		font-weight: 700;
		color: #1b3a66;
	}
	.badge {
		font-size: 0.68rem;
		font-weight: 600;
		padding: 0.25rem 0.55rem;
		border-radius: 999px;
		white-space: nowrap;
	}
	.facility {
		background: #e3f4e8;
		color: #1d7a3d;
	}
	.line {
		background: #fef3df;
		color: #9a6b15;
	}
</style>
