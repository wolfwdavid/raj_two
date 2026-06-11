import { error } from '@sveltejs/kit';
import { categories, products } from '$lib/data/products';
import type { PageLoad } from './$types';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => categories.map((c) => ({ slug: c.slug }));

export const load: PageLoad = ({ params }) => {
	const category = categories.find((c) => c.slug === params.slug);
	if (!category) error(404, 'Category not found');
	return {
		category,
		items: products.filter((p) => p.category === category.slug)
	};
};
