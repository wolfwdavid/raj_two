import { error } from '@sveltejs/kit';
import { guides } from '$lib/data/products';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => guides.map((g) => ({ slug: g.slug }));

export const load: PageLoad = ({ params }) => {
	const guide = guides.find((g) => g.slug === params.slug);
	if (!guide) error(404, 'Guide not found');
	return { guide };
};
