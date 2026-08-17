export type ProductCategory = 'sugar' | 'jaggery' | 'ghee' | 'nuts-snacks';

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
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Pure%20white%20granulated%20sugar%20crystals%20in%20a%20clear%20glass%20bowl%20on%20cream%20background%20studio%20photography&image_size=square_hd',
    href: '/products?category=sugar',
  },
  {
    id: 'jaggery',
    name: 'Jaggery & Brown',
    description: 'Traditional jaggery and rich brown sugar.',
    tint: 'bg-jaggery-light',
    accent: 'text-jaggery',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Natural%20jaggery%20blocks%20and%20brown%20sugar%20crystals%20on%20warm%20rustic%20surface%20studio%20photography&image_size=square_hd',
    href: '/products?category=jaggery',
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
    id: 'amrut-white-sugar-1kg',
    name: 'Amrut White Sugar',
    category: 'sugar',
    tagline: 'Double-refined everyday sugar',
    description: 'Crystal-clear, double-refined sugar from the heart of Maharashtra. Quick-dissolving, uniformly grained, and perfect for tea, coffee, baking, and every sweet moment at home.',
    packSizes: ['1 kg', '5 kg', '25 kg', '50 kg'],
    benefits: [
      { id: 'dr', label: 'Double Refined', icon: 'sparkles' },
      { id: 'qd', label: 'Quick Dissolve', icon: 'zap' },
      { id: 'nat', label: '100% Natural', icon: 'leaf' },
    ],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Pure%20white%20granulated%20sugar%20crystals%20scattered%20and%20in%20a%20glass%20jar%20with%20soft%20cream%20background%20minimal%20studio%20photography&image_size=square_hd',
  },
  {
    id: 'amrut-gold-sugar',
    name: 'Amrut Gold Sugar',
    category: 'sugar',
    tagline: 'Premium sulphur-free golden sugar',
    description: 'A premium range of sulphur-free sugar with a warm golden hue. Retains natural molasses notes for a richer sweetness in your desserts and beverages.',
    packSizes: ['1 kg', '2 kg', '5 kg'],
    benefits: [
      { id: 'sf', label: 'Sulphur-Free', icon: 'shield' },
      { id: 'pre', label: 'Premium Grade', icon: 'sparkles' },
      { id: 'nc', label: 'No Added Colours', icon: 'heart' },
    ],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Golden%20granulated%20sugar%20crystals%20in%20elegant%20glass%20container%20warm%20studio%20lighting%20premium%20product%20photography&image_size=square_hd',
  },
  {
    id: 'amrut-caster-sugar',
    name: 'Amrut Caster Sugar',
    category: 'sugar',
    tagline: 'Fine-grain for baking & desserts',
    description: 'Extra-fine caster sugar that dissolves instantly — ideal for meringues, mousses, cakes, and pastry creams. A baker\u2019s trusted companion.',
    packSizes: ['500 g', '1 kg', '2 kg'],
    benefits: [
      { id: 'fg', label: 'Fine Grain', icon: 'seedling' },
      { id: 'qd', label: 'Instant Dissolve', icon: 'zap' },
      { id: 'bak', label: 'Baker\u2019s Grade', icon: 'sparkles' },
    ],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Fine%20caster%20sugar%20powder%20in%20ceramic%20bowl%20with%20whisk%20and%20baking%20utensils%20soft%20cream%20background%20studio%20shot&image_size=square_hd',
  },

  // ===== JAGGERY =====
  {
    id: 'amrut-jaggery-blocks',
    name: 'Amrut Jaggery Blocks',
    category: 'jaggery',
    tagline: 'Traditional gur blocks, pure and unrefined',
    description: 'Solid jaggery blocks made from the first boil of sugarcane juice. Rich in minerals, with the deep, caramel sweetness your grandmother used to cook with.',
    packSizes: ['500 g', '1 kg', '2 kg'],
    benefits: [
      { id: 'unr', label: 'Unrefined', icon: 'leaf' },
      { id: 'min', label: 'Mineral Rich', icon: 'heart' },
      { id: 'np', label: 'No Preservatives', icon: 'shield' },
    ],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Traditional%20jaggery%20blocks%20gur%20on%20banana%20leaf%20with%20sugarcane%20pieces%20rustic%20warm%20lighting%20studio%20photography&image_size=square_hd',
  },
  {
    id: 'amrut-jaggery-powder',
    name: 'Amrut Jaggery Powder',
    category: 'jaggery',
    tagline: 'Free-flowing jaggery powder for daily use',
    description: 'Free-flowing, granular jaggery powder — easy to scoop, easy to measure. Perfect for porridges, laddoos, and adding a healthy sweet kick to your chai.',
    packSizes: ['500 g', '1 kg', '5 kg'],
    benefits: [
      { id: 'ff', label: 'Free-Flowing', icon: 'zap' },
      { id: 'nat', label: '100% Natural', icon: 'leaf' },
      { id: 'hp', label: 'Hygienically Packed', icon: 'heart' },
    ],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Brown%20jaggery%20powder%20in%20wooden%20scoop%20and%20ceramic%20bowl%20rustic%20burlap%20backdrop%20warm%20natural%20lighting%20studio%20shot&image_size=square_hd',
  },
  {
    id: 'amrut-brown-sugar',
    name: 'Amrut Brown Sugar',
    category: 'jaggery',
    tagline: 'Soft brown sugar with rich molasses',
    description: 'Soft, moist brown sugar with a natural caramel-molasses flavour. Elevates your coffee, baked beans, cookies, and BBQ sauces with a warm, earthy sweetness.',
    packSizes: ['500 g', '1 kg'],
    benefits: [
      { id: 'mol', label: 'Molasses Rich', icon: 'flame' },
      { id: 'sm', label: 'Soft & Moist', icon: 'droplet' },
      { id: 'nc', label: 'No Added Colours', icon: 'sparkles' },
    ],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Soft%20brown%20sugar%20in%20rustic%20ceramic%20bowl%20with%20spoon%20warm%20tan%20background%20studio%20product%20photography&image_size=square_hd',
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
