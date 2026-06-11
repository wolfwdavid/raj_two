<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	let { initial = '' }: { initial?: string } = $props();
	let query = $state('');

	// keep the box in sync when navigating between search URLs
	$effect(() => {
		query = initial;
	});

	function submit(e: SubmitEvent) {
		e.preventDefault();
		const q = query.trim();
		if (q) goto(`${base}/search?q=${encodeURIComponent(q)}`);
	}
</script>

<form class="search" onsubmit={submit} role="search">
	<input
		type="search"
		placeholder="Search for nut-free snacks"
		aria-label="Search for nut-free snacks"
		bind:value={query}
	/>
	<button type="submit">Search</button>
</form>

<style>
	.search {
		display: flex;
		background: #ffffff;
		border-radius: 999px;
		padding: 0.3rem;
		box-shadow: 0 6px 24px rgba(27, 58, 102, 0.12);
		max-width: 34rem;
		width: 100%;
	}

	input {
		flex: 1;
		border: none;
		outline: none;
		font: inherit;
		font-size: 1rem;
		padding: 0.65rem 1.1rem;
		border-radius: 999px;
		color: #233044;
		min-width: 0;
	}
	input::placeholder {
		color: #8da0bb;
	}

	button {
		border: none;
		background: #2458a6;
		color: #fff;
		font: inherit;
		font-weight: 600;
		padding: 0.65rem 1.5rem;
		border-radius: 999px;
		cursor: pointer;
	}
	button:hover {
		background: #1b4584;
	}
</style>
