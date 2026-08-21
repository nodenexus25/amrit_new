export type ProductCategory = 'sugar' | 'jaggery' | 'ghee' | 'nuts-snacks' | 'pulses';

export interface Benefit {
  id: string;
  label: string;
  icon: 'leaf' | 'shield' | 'droplet' | 'zap' | 'heart' | 'flame' | 'seedling' | 'sparkles' | 'sun';
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  packSizes: string[];
  benefits: Benefit[];
  image: string;
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  description: string;
  tint: string;
  accent: string;
  image: string;
  href: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'sugar',
    name: 'Sugar',
    description: 'Pure, double-refined sugar for everyday sweetness.',
    tint: 'bg-teal-light',
    accent: 'text-teal-deep',
    image: '/A sugar.png',
    href: '/products?category=sugar',
  },
  {
    id: 'jaggery',
    name: 'Jaggery & Brown',
    description: 'Traditional jaggery blocks, powder and cubes.',
    tint: 'bg-jaggery-light',
    accent: 'text-jaggery',
    image: '/A gud.png',
    href: '/products?category=jaggery',
  },
  {
    id: 'pulses',
    name: 'Amrut Farms — Pulses',
    description: 'Toor, Chana, Moong, Urad dal — from select farms.',
    tint: 'bg-jaggery-light',
    accent: 'text-jaggery',
    image: '/A pulses.png',
    href: '/products?category=pulses',
  },
  {
    id: 'ghee',
    name: 'Desi Cow Ghee',
    description: 'Pure, golden ghee from grass-fed cows.',
    tint: 'bg-gold-light',
    accent: 'text-gold',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Golden%20pure%20desi%20cow%20ghee%20in%20traditional%20brass%20pot%20with%20cream%20background%20studio%20photography&image_size=square_hd',
    href: '/products?category=ghee',
  },
  {
    id: 'nuts-snacks',
    name: 'BOYO — Nuts & Snacks',
    description: 'Healthy snacking — nuts, seeds, berries, and more.',
    tint: 'bg-gold-light',
    accent: 'text-gold',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Mix%20of%20premium%20almonds%20cashews%20dried%20berries%20pumpkin%20seeds%20in%20rustic%20bowl%20warm%20lighting%20studio%20shot&image_size=square_hd',
    href: '/boyo',
  },
];

export const trustBadges: Benefit[] = [
  { id: 'natural', label: '100% Natural', icon: 'leaf' },
  { id: 'no-preservatives', label: 'No Preservatives', icon: 'shield' },
  { id: 'no-colours', label: 'No Added Colours', icon: 'sparkles' },
  { id: 'hygienic', label: 'Hygienically Packed', icon: 'heart' },
];

export const products: Product[] = [
  // ===== SUGAR =====
  {
    id: 'amrut-sugar-1kg',
    name: 'Amrut Crystal Sugar 1kg',
    category: 'sugar',
    tagline: 'Classic everyday sugar pack',
    description: 'The iconic light-green 1kg pack of Amrut Pure Hygienic Crystal Sugar — double-refined, uniformly grained, quick-dissolving. Perfect for chai, coffee, and daily cooking.',
    packSizes: ['1 kg'],
    benefits: [
      { id: 'dr', label: 'Double Refined', icon: 'sparkles' },
      { id: 'qd', label: 'Quick Dissolve', icon: 'zap' },
      { id: 'nat', label: '100% Natural', icon: 'leaf' },
    ],
    image: '/sugar 1 kg.png',
  },
  {
    id: 'amrut-sugar-2kg',
    name: 'Amrut Crystal Sugar 2kg',
    category: 'sugar',
    tagline: 'Premium dark-green 2kg pouch',
    description: 'Our bestselling dark-green 2kg pouch — Khaas Waali Mithaas printed on every pack. Contains the same pure, hygienic sugar crystals families have loved for decades.',
    packSizes: ['2 kg'],
    benefits: [
      { id: 'dr', label: 'Hygienically Sealed', icon: 'shield' },
      { id: 'sf', label: 'Sulphur-Free', icon: 'sparkles' },
      { id: 'qd', label: 'Premium Grade', icon: 'heart' },
    ],
    image: '/sugar 2 kg.png',
  },
  {
    id: 'amrut-sugar-5kg',
    name: 'Amrut Crystal Sugar 5kg',
    category: 'sugar',
    tagline: 'Family pack — bulk value',
    description: 'The 5kg family-value pack. Large enough to last a month of chai, mithai, and all your sweet cooking needs. Same trusted Amrut purity in every crystal.',
    packSizes: ['5 kg'],
    benefits: [
      { id: 'hp', label: 'Hygienically Packed', icon: 'shield' },
      { id: 'dr', label: 'Double Refined', icon: 'sparkles' },
      { id: 'bp', label: 'Bulk Value', icon: 'seedling' },
    ],
    image: '/sugar 5 kg.png',
  },
  {
    id: 'amrut-sugar-family',
    name: 'Amrut Sugar — Family Range',
    category: 'sugar',
    tagline: '1kg · 2kg · 5kg — for every household',
    description: 'The complete Amrut Sugar family — 1, 2 and 5kg pouches. Whatever your kitchen size, there\u2019s an Amrut Sugar pack that fits perfectly.',
    packSizes: ['1 kg', '2 kg', '5 kg', '25 kg', '50 kg'],
    benefits: [
      { id: 'uni', label: 'Uniform Grains', icon: 'sparkles' },
      { id: 'cry', label: 'Crystal Clear', icon: 'droplet' },
      { id: 'tru', label: '64 Years Trusted', icon: 'heart' },
    ],
    image: '/b sugar.png',
  },
  {
    id: 'amrut-sugar-lifestyle',
    name: 'Amrut Sugar — Sugarcane Fresh',
    category: 'sugar',
    tagline: 'From select sugarcane to your kitchen',
    description: 'Made from the finest Maharashtra sugarcane, slow-crystallised with care. This 1kg pack shows the journey — fresh sugarcane stalks, wooden scoop, pure white crystals.',
    packSizes: ['1 kg', '2 kg'],
    benefits: [
      { id: 'sel', label: 'Select Sugarcane', icon: 'leaf' },
      { id: 'slo', label: 'Slow Crystallised', icon: 'flame' },
      { id: 'nat', label: '100% Pure', icon: 'shield' },
    ],
    image: '/Product.png',
  },
  {
    id: 'amrut-sugar-premium',
    name: 'Amrut Premium Sugar 3-Pack',
    category: 'sugar',
    tagline: 'Dark-green premium pouches, 1/2/5 kg',
    description: 'Our refreshed dark-green premium range. The signature crystal \u201Ca\u201D monogram on every pack stands for the clarity and purity of sugar inside.',
    packSizes: ['1 kg', '2 kg', '5 kg'],
    benefits: [
      { id: 'pr', label: 'Premium Range', icon: 'sparkles' },
      { id: 're', label: 'Sealable Pouch', icon: 'zap' },
      { id: 'lo', label: 'Longer Shelf-Life', icon: 'shield' },
    ],
    image: '/Amrut Packet Sugar .png',
  },
  {
    id: 'amrut-sugar-solo',
    name: 'Amrut Sugar 2kg Classic',
    category: 'sugar',
    tagline: 'The classic light-green 2kg pack',
    description: 'The everyday 2kg pack — the sugar you grew up with. Clean, hygienic, and ready for chai, laddoos, halwa, or any sweet memory you want to make.',
    packSizes: ['2 kg'],
    benefits: [
      { id: 'cl', label: 'Classic Pack', icon: 'heart' },
      { id: 'pu', label: 'Pure Crystals', icon: 'droplet' },
      { id: 'hy', label: 'Hygienic', icon: 'shield' },
    ],
    image: '/SOLO AMRUT.png',
  },

  // ===== JAGGERY =====
  {
    id: 'amrut-gud-950gm',
    name: 'Amrut Gud — 950gm Block',
    category: 'jaggery',
    tagline: 'Original orange jaggery block, Chemical Free',
    description: 'The iconic 950gm Amrut Gud block with its OK-hand label. Chemical Free · 100% Natural · 950 gm. The deep, caramel sweetness of the first sugarcane boil.',
    packSizes: ['950 gm'],
    benefits: [
      { id: 'cf', label: 'Chemical Free', icon: 'shield' },
      { id: 'na', label: '100% Natural', icon: 'leaf' },
      { id: 'mi', label: 'Mineral Rich', icon: 'heart' },
    ],
    image: '/gud.png',
  },
  {
    id: 'amrut-gud-dark-950gm',
    name: 'Amrut Gud Dark — 950gm',
    category: 'jaggery',
    tagline: 'Darker, richer 950gm jaggery block',
    description: 'A darker, slower-boiled jaggery block for deeper jaggery flavour. Perfect for your bajra rotlas, til laddoos, and warm winter preparations.',
    packSizes: ['950 gm'],
    benefits: [
      { id: 'cf', label: 'Chemical Free', icon: 'shield' },
      { id: 'sb', label: 'Slow Boiled', icon: 'flame' },
      { id: 'na', label: '100% Natural', icon: 'leaf' },
    ],
    image: '/950.png',
  },
  {
    id: 'amrut-gud-450gm',
    name: 'Amrut Gud — 450gm Block',
    category: 'jaggery',
    tagline: 'Compact 450gm single-use jaggery',
    description: 'Our smaller 450gm jaggery block — ideal for smaller households, quick purchases, and trying Amrut Gud for the first time.',
    packSizes: ['450 gm'],
    benefits: [
      { id: 'co', label: 'Compact Size', icon: 'zap' },
      { id: 'cf', label: 'Chemical Free', icon: 'shield' },
      { id: 'na', label: '100% Natural', icon: 'leaf' },
    ],
    image: '/450.png',
  },
  {
    id: 'amrut-gud-combo',
    name: 'Amrut Gud — Family Combo',
    category: 'jaggery',
    tagline: '950gm + 450gm blocks together',
    description: 'Both sizes of Amrut Gud in one shot — the 950gm for regular use at home, the 450gm to take to the office or give to loved ones.',
    packSizes: ['450 gm', '950 gm'],
    benefits: [
      { id: 'va', label: 'Value Combo', icon: 'seedling' },
      { id: 'cf', label: 'Chemical Free', icon: 'shield' },
      { id: 'na', label: '100% Natural', icon: 'leaf' },
    ],
    image: '/two guds.jpg',
  },
  {
    id: 'amrut-gud-lifestyle-orange',
    name: 'Amrut Gud — Orange Jaggery Pieces',
    category: 'jaggery',
    tagline: 'Orange jaggery with bowl of cone pieces',
    description: 'Beautiful orange-tinted jaggery — the first boil gives it this warm colour. Serve the cone pieces with chai, or use the block for your dal, sabzi, and sweets.',
    packSizes: ['950 gm block', 'Cone pieces 250gm'],
    benefits: [
      { id: 'fb', label: 'First Boil', icon: 'flame' },
      { id: 'na', label: '100% Natural', icon: 'leaf' },
      { id: 'sw', label: 'Sweet & Rich', icon: 'heart' },
    ],
    image: '/gud product1.png',
  },
  {
    id: 'amrut-gud-lifestyle-dark',
    name: 'Amrut Gud — Dark Jaggery Pieces',
    category: 'jaggery',
    tagline: 'Dark jaggery with cone pieces in bowl',
    description: 'Darker, more caramelised jaggery — the flavour your grandmother used. Crumbled into moong dal, melted into gud-wal chai, or rolled into til laddoos.',
    packSizes: ['950 gm block', 'Cone pieces 250gm'],
    benefits: [
      { id: 'dc', label: 'Deep Caramel', icon: 'flame' },
      { id: 'cf', label: 'No Chemicals', icon: 'shield' },
      { id: 'mi', label: 'Mineral Rich', icon: 'seedling' },
    ],
    image: '/gud product2.png',
  },
  {
    id: 'amrut-jaggery-cubes',
    name: 'Amrut Jaggery Cubes — 500gm',
    category: 'jaggery',
    tagline: 'Premium cube jaggery in reusable jar',
    description: 'Easy-to-store 500gm jar of Amrut Jaggery Cubes. Pop a cube into your chai, drop into dal, or snack them straight — a 21st-century upgrade to traditional gud.',
    packSizes: ['500 gm Jar'],
    benefits: [
      { id: 'cf', label: 'Chemical Free', icon: 'shield' },
      { id: 'ib', label: 'Immunity Booster', icon: 'heart' },
      { id: 'ej', label: 'Easy Jar Pack', icon: 'zap' },
    ],
    image: '/MYC(3).png',
  },

  // ===== PULSES (new) =====
  {
    id: 'amrut-toor-dal',
    name: 'Amrut Farms Toor Dal',
    category: 'pulses',
    tagline: 'Red toor dal — select farm source',
    description: 'Premium red toor dal (toor daal) from Amrut Farms. No artificial colours, no preservatives. The dal your Sunday aratik needs.',
    packSizes: ['1 kg', '2 kg', '5 kg'],
    benefits: [
      { id: 'sf', label: 'From Select Farms', icon: 'leaf' },
      { id: 'nc', label: 'No Artificial Colours', icon: 'sparkles' },
      { id: 'np', label: 'No Preservatives', icon: 'shield' },
    ],
    image: '/toor dal.png',
  },
  {
    id: 'amrut-chana-dal',
    name: 'Amrut Farms Chana Dal',
    category: 'pulses',
    tagline: 'Bright yellow chana dal',
    description: 'Sun-yellow chana dal (chana daal) — perfect for dal, pakoras, chana dal halwa, and your everyday tadka. Cleanly milled and uniformly split.',
    packSizes: ['1 kg', '2 kg', '5 kg'],
    benefits: [
      { id: 'hp', label: 'High Protein', icon: 'seedling' },
      { id: 'nc', label: 'No Artificial Colours', icon: 'sparkles' },
      { id: 'np', label: 'No Preservatives', icon: 'shield' },
    ],
    image: '/CHANA.png',
  },
  {
    id: 'amrut-moong-dal',
    name: 'Amrut Farms Moong Dal',
    category: 'pulses',
    tagline: 'Green-chhilka moong dal — healthy & light',
    description: 'Moong dal (moong daal, green chilka) with its green skin intact — the lightest, most digestible dal. Great for khichadi, dal dhokli, and post-fast meals.',
    packSizes: ['1 kg', '2 kg'],
    benefits: [
      { id: 'li', label: 'Light & Easy', icon: 'droplet' },
      { id: 'hp', label: 'High Protein', icon: 'seedling' },
      { id: 'fs', label: 'Farm Sourced', icon: 'leaf' },
    ],
    image: '/MOONG.png',
  },
  {
    id: 'amrut-urad-dal',
    name: 'Amrut Farms Urad Dal',
    category: 'pulses',
    tagline: 'White split urad — for idli, dosa, vada',
    description: 'Clean, white split urad dal (urad daal) — your idli/dosa batter starts here. Soaks and grinds smoothly every single time.',
    packSizes: ['1 kg', '2 kg'],
    benefits: [
      { id: 'cr', label: 'Clean & White', icon: 'sparkles' },
      { id: 'sm', label: 'Smooth Grinding', icon: 'zap' },
      { id: 'sf', label: 'Select Farms', icon: 'leaf' },
    ],
    image: '/URAD.png',
  },
  {
    id: 'amrut-pulses-family',
    name: 'Amrut Farms — Pulses Range',
    category: 'pulses',
    tagline: 'Toor · Moong · Urad · Chana — dal for every day',
    description: 'All four Amrut Farms dals in one beautiful range. Because a Maharashtrian home runs on dal — and Amrut Farms brings you clean, select-sourced every day.',
    packSizes: ['1 kg each', 'Combo packs'],
    benefits: [
      { id: 'np', label: 'No Preservatives', icon: 'shield' },
      { id: 'nc', label: 'No Artificial Colours', icon: 'sparkles' },
      { id: 'fs', label: 'From Select Farms', icon: 'leaf' },
    ],
    image: '/A pulses.png',
  },

  // ===== GHEE =====
  {
    id: 'amrut-desi-ghee-1l',
    name: 'Amrut Desi Cow Ghee',
    category: 'ghee',
    tagline: 'Pure ghee from grass-fed desi cows',
    description: 'Traditional, slow-cultured ghee churned from the milk of grass-fed desi cows. Aromatic, golden, and rich — the taste of tradition in every spoonful.',
    packSizes: ['500 ml', '1 L', '2 L', '5 L'],
    benefits: [
      { id: 'gc', label: 'Grass-Fed Cows', icon: 'leaf' },
      { id: 'tra', label: 'Traditional Churned', icon: 'flame' },
      { id: 'add', label: 'No Additives', icon: 'shield' },
    ],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Golden%20pure%20ghee%20pouring%20into%20traditional%20copper%20bowl%20with%20diya%20lamp%20and%20mango%20leaves%20warm%20festive%20lighting%20studio%20photography&image_size=square_hd',
  },
  {
    id: 'amrut-ghee-jar',
    name: 'Amrut Premium Ghee Jar',
    category: 'ghee',
    tagline: 'Everyday ghee for cooking & tadka',
    description: 'Everyday cooking ghee with a high smoke point. Perfect for tadkas, parathas, dal, and all your daily cooking needs. Pure, consistent, and delicious.',
    packSizes: ['200 ml', '500 ml', '1 L'],
    benefits: [
      { id: 'hsp', label: 'High Smoke Point', icon: 'flame' },
      { id: 'hyg', label: 'Hygienically Sealed', icon: 'heart' },
      { id: 'pur', label: 'Pure & Unsalted', icon: 'shield' },
    ],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Clear%20glass%20jar%20of%20pure%20ghee%20with%20brass%20lid%20on%20stone%20surface%20with%20rotis%20and%20curry%20bowl%20soft%20lighting%20studio%20shot&image_size=square_hd',
  },

  // ===== NUTS & SNACKS (BOYO) =====
  {
    id: 'boyo-whole-almonds',
    name: 'BOYO Whole Almonds',
    category: 'nuts-snacks',
    tagline: 'Premium California almonds',
    description: 'Plump, hand-selected California almonds — naturally packed with protein, fibre, and vitamin E. Great for snacking, soaking, or garnishing your desserts.',
    packSizes: ['250 g', '500 g', '1 kg'],
    benefits: [
      { id: 'hp1', label: 'High Protein', icon: 'seedling' },
      { id: 'hs', label: 'Hand-Selected', icon: 'sparkles' },
      { id: 'nc1', label: 'No Added Salt', icon: 'shield' },
    ],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Premium%20whole%20almonds%20in%20wooden%20bowl%20scattered%20on%20warm%20stone%20surface%20natural%20lighting%20studio%20product%20photography&image_size=square_hd',
  },
  {
    id: 'boyo-roasted-cashews',
    name: 'BOYO Roasted Cashews',
    category: 'nuts-snacks',
    tagline: 'Slow-roasted, lightly salted',
    description: 'Creamy cashews slow-roasted for that perfect crunch and a kiss of salt. Add them to your trail mix, curries, or simply enjoy them straight out of the pack.',
    packSizes: ['200 g', '500 g', '1 kg'],
    benefits: [
      { id: 'sr', label: 'Slow Roasted', icon: 'flame' },
      { id: 'ls', label: 'Lightly Salted', icon: 'sparkles' },
      { id: 'cr', label: 'Crunchy', icon: 'zap' },
    ],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Golden%20roasted%20cashews%20in%20rustic%20ceramic%20bowl%20with%20salt%20crystals%20and%20chili%20flakes%20warm%20lighting%20studio%20photography&image_size=square_hd',
  },
  {
    id: 'boyo-mixed-seeds',
    name: 'BOYO Mixed Seeds',
    category: 'nuts-snacks',
    tagline: 'Pumpkin, sunflower, chia & flax',
    description: 'A power blend of pumpkin, sunflower, chia, and flax seeds. Sprinkle on salads, yogurt, smoothies, or toast them for a nutrient-rich topping.',
    packSizes: ['250 g', '500 g'],
    benefits: [
      { id: 'of', label: 'Omega-3 Rich', icon: 'heart' },
      { id: 'hf', label: 'High Fibre', icon: 'seedling' },
      { id: 'nat1', label: '100% Natural', icon: 'leaf' },
    ],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Mix%20of%20pumpkin%20sunflower%20chia%20flax%20sesame%20seeds%20in%20small%20glass%20jars%20and%20scattered%20cream%20background%20studio%20photography&image_size=square_hd',
  },
  {
    id: 'boyo-dried-berries',
    name: 'BOYO Dried Berries Mix',
    category: 'nuts-snacks',
    tagline: 'Cranberries, blueberries & raisins',
    description: 'A naturally sweet medley of cranberries, blueberries, and golden raisins. Toss into your muesli, bake into cookies, or snack them guilt-free.',
    packSizes: ['200 g', '400 g'],
    benefits: [
      { id: 'ant', label: 'Anti-Oxidant Rich', icon: 'sparkles' },
      { id: 'nas', label: 'No Added Sugar', icon: 'shield' },
      { id: 'nat2', label: 'Naturally Dried', icon: 'sun' },
    ],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Colourful%20mix%20of%20dried%20cranberries%20blueberries%20golden%20raisins%20in%20ceramic%20bowl%20scattered%20on%20linen%20cloth%20studio%20photography&image_size=square_hd',
  },
  {
    id: 'boyo-peanut-butter',
    name: 'BOYO Peanut Butter',
    category: 'nuts-snacks',
    tagline: 'High-protein crunchy & creamy',
    description: 'Roasted peanut butter made one batch at a time — no added oils, no palm oil, no nonsense. Choose crunchy for texture or creamy for your smoothies.',
    packSizes: ['340 g', '1 kg'],
    benefits: [
      { id: 'hpr', label: 'High Protein', icon: 'seedling' },
      { id: 'npo', label: 'No Palm Oil', icon: 'shield' },
      { id: 'nns', label: 'Non-GMO', icon: 'leaf' },
    ],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Creamy%20peanut%20butter%20in%20glass%20jar%20with%20knife%20and%20toast%20slice%20cream%20kitchen%20background%20warm%20lighting%20studio%20shot&image_size=square_hd',
  },
];

export function getProductsByCategory(category: ProductCategory | 'all'): Product[] {
  if (category === 'all') return products;
  return products.filter((p) => p.category === category);
}

export function getCategoryInfo(id: ProductCategory): CategoryInfo | undefined {
  return categories.find((c) => c.id === id);
}
