<script lang="ts">
	import { base } from '$app/paths';
	import SearchBar from '$lib/SearchBar.svelte';
	import { categories, guides, products } from '$lib/data/products';

	const facilityPicks = products.filter((p) => p.nutFreeFacility).slice(0, 2);
</script>

<svelte:head>
	<title>Safe Snacks — Nut-Free Snacks. Zero Stress.</title>
</svelte:head>

<section class="hero">
	<h1>Safe Snacks. Zero Stress.</h1>
	<SearchBar />
</section>

<section class="band" id="categories">
	<h2>Shop by Category</h2>
	<div class="cat-grid">
		{#each categories as cat (cat.slug)}
			<a class="cat-card" href="{base}/category/{cat.slug}">
				<span class="cat-art" aria-hidden="true">{cat.emoji}</span>
				<span class="cat-name">{cat.name}</span>
			</a>
		{/each}
	</div>
</section>

<section class="band facility" id="facility">
	<div class="facility-text">
		<h2>Nut-Free Facility</h2>
		<p>Browse snacks made in facilities that do not process peanuts or tree nuts.</p>
		<a class="facility-link" href="{base}/search?q=facility">Browse facility-safe snacks →</a>
	</div>
	<div class="facility-art" aria-hidden="true">
		{#each facilityPicks as p (p.id)}
			<div class="pack">
				<span class="pack-emoji">{p.emoji}</span>
				<span class="pack-name">{p.name}</span>
			</div>
		{/each}
	</div>
</section>

<section class="band" id="guides">
	<h2>Guides &amp; Tips</h2>
	<div class="guide-grid">
		{#each guides as g (g.slug)}
			<a class="guide-card" href="{base}/guides/{g.slug}">
				<span class="guide-art" aria-hidden="true">{g.emoji}</span>
				<span class="guide-title">{g.title}</span>
				<span class="guide-teaser">{g.teaser}</span>
			</a>
		{/each}
	</div>
</section>

<style>
	.hero {
		background: linear-gradient(180deg, #eaf3fb 0%, #f3f8fd 100%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.6rem;
		padding: clamp(3rem, 9vw, 5.5rem) 1.2rem;
	}

	h1 {
		margin: 0;
		font-size: clamp(1.9rem, 5.5vw, 3rem);
		font-weight: 800;
		letter-spacing: -0.02em;
		text-align: center;
	}

	.band {
		padding: clamp(1.8rem, 5vw, 3rem) clamp(1rem, 5vw, 3rem) 0;
		max-width: 72rem;
		margin: 0 auto;
	}

	h2 {
		font-size: clamp(1.3rem, 3.4vw, 1.7rem);
		font-weight: 800;
		margin: 0 0 1.2rem;
	}

	.cat-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
		gap: 0.9rem;
	}

	.cat-card {
		background: #fdf6e7;
		border-radius: 14px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		padding: 1.4rem 0.5rem 1.1rem;
		text-decoration: none;
		transition:
			transform 0.12s ease,
			box-shadow 0.12s ease;
	}
	.cat-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(27, 58, 102, 0.12);
	}
	.cat-art {
		font-size: 2.4rem;
	}
	.cat-name {
		font-weight: 700;
		color: #233044;
		font-size: 0.95rem;
	}

	.facility {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.4rem;
		align-items: center;
	}
	@media (min-width: 700px) {
		.facility {
			grid-template-columns: 1.2fr 1fr;
		}
	}
	.facility-text p {
		color: #44587a;
		font-size: 1.02rem;
		max-width: 26rem;
		margin: 0 0 1rem;
	}
	.facility-link {
		font-weight: 700;
		color: #2458a6;
		text-decoration: none;
	}
	.facility-link:hover {
		text-decoration: underline;
	}

	.facility-art {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}
	.pack {
		background: #28bdb8;
		border-radius: 12px;
		width: 9.5rem;
		aspect-ratio: 3 / 3.6;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		color: #ffffff;
		box-shadow: 0 10px 24px rgba(27, 58, 102, 0.18);
		padding: 0.8rem;
		text-align: center;
	}
	.pack:nth-child(2) {
		background: #c9a36a;
	}
	.pack-emoji {
		font-size: 2.6rem;
	}
	.pack-name {
		font-weight: 700;
		font-size: 0.82rem;
	}

	.guide-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 1rem;
	}

	.guide-card {
		text-decoration: none;
		background: #ffffff;
		border: 1px solid #eef2f7;
		border-radius: 16px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition: box-shadow 0.15s ease;
	}
	.guide-card:hover {
		box-shadow: 0 8px 24px rgba(27, 58, 102, 0.1);
	}
	.guide-art {
		background: linear-gradient(135deg, #fdf6e7, #ffe9c7);
		font-size: 3rem;
		display: grid;
		place-items: center;
		padding: 1.6rem 0;
	}
	.guide-title {
		font-weight: 700;
		color: #1b3a66;
		padding: 0.8rem 1rem 0.2rem;
	}
	.guide-teaser {
		color: #44587a;
		font-size: 0.85rem;
		padding: 0 1rem 1rem;
	}
</style>
