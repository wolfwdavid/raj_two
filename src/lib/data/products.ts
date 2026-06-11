export interface Category {
	slug: string;
	name: string;
	emoji: string;
}

export interface Product {
	id: string;
	name: string;
	brand: string;
	category: string; // category slug
	emoji: string;
	price: number;
	nutFreeFacility: boolean;
	blurb: string;
}

export const categories: Category[] = [
	{ slug: 'cookies', name: 'Cookies', emoji: '🍪' },
	{ slug: 'granola-bars', name: 'Granola Bars', emoji: '🥜' },
	{ slug: 'chips', name: 'Chips', emoji: '🥔' },
	{ slug: 'candy', name: 'Candy', emoji: '🍬' },
	{ slug: 'crackers', name: 'Crackers', emoji: '🧀' },
	{ slug: 'popcorn', name: 'Popcorn', emoji: '🍿' },
	{ slug: 'trail-mix', name: 'Trail Mix', emoji: '🥨' },
	{ slug: 'pretzels', name: 'Pretzels', emoji: '🥨' }
];

// granola-bars category uses a seed emoji on cards (no nut imagery)
categories[1].emoji = '🌾';
categories[6].emoji = '🍇';

export const products: Product[] = [
	// Cookies
	{ id: 'ck1', name: 'Chocolate Chip Minis', brand: 'Sunny Crumb', category: 'cookies', emoji: '🍪', price: 4.99, nutFreeFacility: true, blurb: 'Bite-size classics baked in a dedicated nut-free bakery.' },
	{ id: 'ck2', name: 'Vanilla Bear Snaps', brand: 'Little Lunchbox', category: 'cookies', emoji: '🐻', price: 3.79, nutFreeFacility: true, blurb: 'Crunchy vanilla bears, school-safe and lunchbox ready.' },
	{ id: 'ck3', name: 'Double Choc Rounds', brand: 'Sunny Crumb', category: 'cookies', emoji: '🍫', price: 5.29, nutFreeFacility: true, blurb: 'Rich cocoa cookies with allergy-friendly chocolate chips.' },
	{ id: 'ck4', name: 'Oat Raisin Softies', brand: 'Harvest Hug', category: 'cookies', emoji: '🌾', price: 4.49, nutFreeFacility: false, blurb: 'Soft-baked oat cookies — made on a peanut-free line.' },
	{ id: 'ck5', name: 'Birthday Sprinkle Cookies', brand: 'Little Lunchbox', category: 'cookies', emoji: '🎂', price: 4.99, nutFreeFacility: true, blurb: 'Funfetti-style sugar cookies for celebrations.' },
	// Granola bars
	{ id: 'gb1', name: 'Honey Oat Bars', brand: 'Harvest Hug', category: 'granola-bars', emoji: '🍯', price: 6.49, nutFreeFacility: true, blurb: 'Chewy oat bars sweetened with honey, zero nut ingredients.' },
	{ id: 'gb2', name: 'Choc Chip Granola Bars', brand: 'TrailSafe', category: 'granola-bars', emoji: '🍫', price: 6.99, nutFreeFacility: true, blurb: 'The classic lunchbox bar, made in a nut-free facility.' },
	{ id: 'gb3', name: 'Apple Cinnamon Bars', brand: 'Harvest Hug', category: 'granola-bars', emoji: '🍎', price: 6.49, nutFreeFacility: true, blurb: 'Real apple and warm cinnamon in a soft-baked bar.' },
	{ id: 'gb4', name: 'Berry Blast Chewy Bars', brand: 'TrailSafe', category: 'granola-bars', emoji: '🫐', price: 6.99, nutFreeFacility: true, blurb: 'Bursting with berries, free from the top 9 allergens.' },
	{ id: 'gb5', name: 'Sunflower Crunch Bars', brand: 'SunButter Co', category: 'granola-bars', emoji: '🌻', price: 7.29, nutFreeFacility: false, blurb: 'Sunflower-seed crunch — peanut-free line, shared facility.' },
	// Chips
	{ id: 'ch1', name: 'Sea Salt Potato Chips', brand: 'Crisp & Clear', category: 'chips', emoji: '🥔', price: 3.99, nutFreeFacility: true, blurb: 'Kettle-cooked with just potatoes, oil, and sea salt.' },
	{ id: 'ch2', name: 'Cheddar Puffs', brand: 'Puffly', category: 'chips', emoji: '🧀', price: 3.49, nutFreeFacility: true, blurb: 'Melty cheddar puffs made in a dedicated nut-free plant.' },
	{ id: 'ch3', name: 'Tortilla Rounds', brand: 'Crisp & Clear', category: 'chips', emoji: '🌽', price: 4.29, nutFreeFacility: true, blurb: 'Stone-ground corn rounds, perfect for school-safe nachos.' },
	{ id: 'ch4', name: 'BBQ Crinkle Cut', brand: 'Crisp & Clear', category: 'chips', emoji: '🍖', price: 3.99, nutFreeFacility: false, blurb: 'Sweet-smoky BBQ crinkles from a peanut-free line.' },
	{ id: 'ch5', name: 'Veggie Straws', brand: 'Puffly', category: 'chips', emoji: '🥕', price: 4.49, nutFreeFacility: true, blurb: 'Crunchy potato-veggie straws with a pinch of sea salt.' },
	// Candy
	{ id: 'cd1', name: 'Fruit Chews', brand: 'Cheerful Sweets', category: 'candy', emoji: '🍓', price: 2.99, nutFreeFacility: true, blurb: 'Chewy fruit candies made in a nut-free candy kitchen.' },
	{ id: 'cd2', name: 'Rainbow Gummy Rings', brand: 'Cheerful Sweets', category: 'candy', emoji: '🌈', price: 3.49, nutFreeFacility: true, blurb: 'Classic gummy rings, free from the top 9 allergens.' },
	{ id: 'cd3', name: 'Choc Caramel Cups', brand: 'SafeTreat', category: 'candy', emoji: '🍫', price: 5.99, nutFreeFacility: true, blurb: 'Allergy-friendly chocolate cups with gooey caramel.' },
	{ id: 'cd4', name: 'Lollipop Variety Pack', brand: 'Cheerful Sweets', category: 'candy', emoji: '🍭', price: 4.99, nutFreeFacility: true, blurb: 'Ten flavors of school-safe lollipops.' },
	{ id: 'cd5', name: 'Sour Watermelon Slices', brand: 'SafeTreat', category: 'candy', emoji: '🍉', price: 3.29, nutFreeFacility: false, blurb: 'Puckery watermelon gummies from a peanut-free line.' },
	// Crackers
	{ id: 'cr1', name: 'Golden Cheese Squares', brand: 'Snackwell Farms', category: 'crackers', emoji: '🧀', price: 4.19, nutFreeFacility: true, blurb: 'Baked cheddar squares from a dedicated nut-free bakery.' },
	{ id: 'cr2', name: 'Buttery Rounds', brand: 'Snackwell Farms', category: 'crackers', emoji: '🧈', price: 3.89, nutFreeFacility: true, blurb: 'Flaky, buttery crackers that love soup and cheese alike.' },
	{ id: 'cr3', name: 'Whole Grain Thins', brand: 'Harvest Hug', category: 'crackers', emoji: '🌾', price: 4.49, nutFreeFacility: true, blurb: 'Crisp whole-grain thins with a touch of sea salt.' },
	{ id: 'cr4', name: 'Mini Saltine Packs', brand: 'Snackwell Farms', category: 'crackers', emoji: '🥣', price: 2.99, nutFreeFacility: false, blurb: 'Single-serve saltines made on a peanut-free line.' },
	// Popcorn
	{ id: 'pc1', name: 'Movie Night Butter', brand: 'Pop Cloud', category: 'popcorn', emoji: '🍿', price: 3.99, nutFreeFacility: true, blurb: 'Fluffy buttery popcorn popped in a nut-free facility.' },
	{ id: 'pc2', name: 'White Cheddar Pop', brand: 'Pop Cloud', category: 'popcorn', emoji: '🧀', price: 4.29, nutFreeFacility: true, blurb: 'Tangy white cheddar dust on every kernel.' },
	{ id: 'pc3', name: 'Sweet & Salty Kettle', brand: 'Pop Cloud', category: 'popcorn', emoji: '🍯', price: 4.29, nutFreeFacility: true, blurb: 'Old-fashioned kettle corn, school-safe and shareable.' },
	{ id: 'pc4', name: 'Cinnamon Drizzle Corn', brand: 'SafeTreat', category: 'popcorn', emoji: '🍩', price: 5.49, nutFreeFacility: false, blurb: 'Dessert popcorn with cinnamon icing, peanut-free line.' },
	// Trail mix
	{ id: 'tm1', name: 'Seed & Berry Mix', brand: 'TrailSafe', category: 'trail-mix', emoji: '🫐', price: 7.99, nutFreeFacility: true, blurb: 'Sunflower seeds, pumpkin seeds, and dried berries — no nuts.' },
	{ id: 'tm2', name: 'Choc Chip Snack Mix', brand: 'TrailSafe', category: 'trail-mix', emoji: '🍫', price: 7.99, nutFreeFacility: true, blurb: 'Pretzels, seeds, and allergy-friendly chips in every handful.' },
	{ id: 'tm3', name: 'Tropical Crunch Mix', brand: 'TrailSafe', category: 'trail-mix', emoji: '🍍', price: 8.49, nutFreeFacility: true, blurb: 'Pineapple, coconut-free crunch, and toasted oats.' },
	{ id: 'tm4', name: 'Ranch Snack Blend', brand: 'Snackwell Farms', category: 'trail-mix', emoji: '🥨', price: 6.99, nutFreeFacility: false, blurb: 'Savory ranch-dusted blend from a peanut-free line.' },
	// Pretzels
	{ id: 'pz1', name: 'Mini Twist Pretzels', brand: 'Twisty', category: 'pretzels', emoji: '🥨', price: 3.49, nutFreeFacility: true, blurb: 'Crunchy mini twists baked in a dedicated nut-free plant.' },
	{ id: 'pz2', name: 'Honey Mustard Nuggets', brand: 'Twisty', category: 'pretzels', emoji: '🍯', price: 4.19, nutFreeFacility: true, blurb: 'Bite-size nuggets with a sweet-tangy kick.' },
	{ id: 'pz3', name: 'Pretzel Rods', brand: 'Twisty', category: 'pretzels', emoji: '🥖', price: 3.99, nutFreeFacility: true, blurb: 'Classic dippable rods for snack trays.' },
	{ id: 'pz4', name: 'Cinnamon Sugar Twists', brand: 'SafeTreat', category: 'pretzels', emoji: '🍩', price: 4.49, nutFreeFacility: false, blurb: 'Dessert pretzels rolled in cinnamon sugar, peanut-free line.' }
];

export interface Guide {
	slug: string;
	title: string;
	emoji: string;
	teaser: string;
	body: string[];
}

export const guides: Guide[] = [
	{
		slug: 'top-nut-free-cookies-for-kids',
		title: 'Top Nut-Free Cookies for Kids',
		emoji: '🍪',
		teaser: 'Our favorite school-safe cookies that kids actually ask for again.',
		body: [
			'Finding cookies that are both safe and genuinely loved by kids is harder than it should be. Labels change, facilities change, and "may contain" warnings hide in the fine print.',
			'Our rule of thumb: start with brands that bake in dedicated nut-free facilities, then taste-test with your toughest critic. Sunny Crumb\'s Chocolate Chip Minis and Little Lunchbox\'s Vanilla Bear Snaps top our list this year.',
			'Always re-check the label on every purchase — manufacturers update lines and facilities without fanfare.'
		]
	},
	{
		slug: 'how-to-choose-a-nut-free-snack',
		title: 'How to Choose a Nut-Free Snack',
		emoji: '✅',
		teaser: 'A three-step label check that takes less than thirty seconds.',
		body: [
			'Step one: read the ingredients list for peanuts, tree nuts, and nut oils — including less obvious names like "arachis oil" (peanut oil).',
			'Step two: look for the allergen statement. "Made in a facility that also processes tree nuts" means cross-contact is possible even when no nut is an ingredient.',
			'Step three: when in doubt, choose products labeled "made in a dedicated nut-free facility" — that filter is built into every category page on this site.'
		]
	},
	{
		slug: 'nut-free-snacks-for-school',
		title: 'Nut-Free Snacks for School',
		emoji: '🎒',
		teaser: 'Lunchbox ideas that meet most school allergy policies.',
		body: [
			'Most schools with allergy policies require snacks that are peanut-free at minimum, and many require tree-nut-free as well.',
			'Reliable lunchbox staples: pretzel twists, popcorn, fruit chews, cheese crackers, and chewy granola bars from nut-free facilities.',
			'Pack a copy of the ingredient label for classroom parties — teachers appreciate the quick verification.'
		]
	}
];

export function searchProducts(query: string): Product[] {
	const q = query.trim().toLowerCase();
	if (!q) return [];
	return products.filter(
		(p) =>
			p.name.toLowerCase().includes(q) ||
			p.brand.toLowerCase().includes(q) ||
			p.blurb.toLowerCase().includes(q) ||
			p.category.replace('-', ' ').includes(q)
	);
}
