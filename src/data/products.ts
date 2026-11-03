const productImage = (filename: string) => `/products/arco/${filename}`;

export type Localized = { ar: string; en: string };
export type CategorySlug = 'fertilizers' | 'salinity-correctors' | 'enhancers';

export type Category = {
  slug: CategorySlug;
  name: Localized;
  description: Localized;
  image: string;
};

export type Product = {
  slug: string;
  category: CategorySlug;
  name: Localized;
  description: Localized;
  composition: Localized[];
  usage: Localized[];
  variants: Localized[];
  image: string;
  featured?: boolean;
};

export const categories: Category[] = [
  {
    slug: 'fertilizers',
    name: { ar: 'الأسمدة', en: 'Fertilizers' },
    description: {
      ar: 'مركبات تغذي النبات بالعناصر الكبرى والصغرى لدعم النمو والتحجيم.',
      en: 'Products supplying essential macro- and micronutrients to support plant growth and fruit sizing.',
    },
    image: '/images/pexels-tahir-osman-109306362-16682802.webp',
  },
  {
    slug: 'salinity-correctors',
    name: { ar: 'معالجات الملوحة', en: 'Salinity Control' },
    description: {
      ar: 'منتجات لتحسين خواص التربة وتقليل تأثير الأملاح الضارة والمساعدة على التخلص منها.',
      en: 'Products that improve soil properties, reduce the effects of harmful salts, and help remove them.',
    },
    image: '/images/pexels-tomfisk-5470449.webp',
  },
  {
    slug: 'enhancers',
    name: { ar: 'مقاومات الإجهاد', en: 'Stress Resistance' },
    description: {
      ar: 'مركبات لتعزيز مقاومة النبات للإجهاد ورفع كفاءة الرش.',
      en: 'Products that support plant stress resistance and improve spray performance.',
    },
    image: '/images/pexels-mikhail-nilov-9243571.webp',
  },
];

export const products: Product[] = [
  {
    slug: 'arco-k',
    category: 'fertilizers',
    name: { ar: 'أركو ك', en: 'Arco K' },
    description: {
      ar: 'سماد سائل غني بالبوتاسيوم سريع الامتصاص، يساعد على تلبية احتياجات النبات من البوتاسيوم.',
      en: 'A potassium-rich liquid fertilizer formulated for rapid absorption to support the plant’s potassium needs.',
    },
    composition: [{
      ar: 'بوتاسيوم: 36% في صورة سترات وأسيتات البوتاسيوم.',
      en: 'Potassium: 36% as potassium citrate and acetate.',
    }],
    usage: [
      { ar: 'رش ورقي: 200–300 سم³ لكل 100 لتر ماء.', en: 'Foliar spray: 200–300 cm³ per 100 L of water.' },
      { ar: 'حقن مع مياه الري: 1–2 لتر للفدان.', en: 'Fertigation: 1–2 L per feddan.' },
    ],
    variants: [{ ar: '500 مل', en: '500 mL' }, { ar: '1 لتر', en: '1 L' }, { ar: '5 لتر', en: '5 L' }],
    image: productImage('arco-k.webp'),
    featured: true,
  },
  {
    slug: 'potafast',
    category: 'fertilizers',
    name: { ar: 'بوتافاست', en: 'Potafast' },
    description: {
      ar: 'سماد سائل غني بالبوتاسيوم في صورة سهلة الامتصاص، ويستخدم في مراحل امتلاء الثمار وزيادة حجمها.',
      en: 'A potassium-rich liquid fertilizer in an easily absorbed form, used during fruit filling and sizing.',
    },
    composition: [{
      ar: 'بوتاسيوم: 26% (أسيتات البوتاسيوم).',
      en: 'Potassium: 26% (potassium acetate).',
    }],
    usage: [
      { ar: 'حقن مع الري: 2 لتر للفدان، ويكرر 2–3 مرات خلال مراحل التحجيم.', en: 'Fertigation: 2 L per feddan; repeat 2–3 times during fruit sizing.' },
      { ar: 'رش ورقي: 300 سم³ لكل 100 لتر ماء.', en: 'Foliar spray: 300 cm³ per 100 L of water.' },
    ],
    variants: [{ ar: '1 لتر', en: '1 L' }, { ar: '5 لتر', en: '5 L' }],
    image: productImage('potafast.webp'),
    featured: true,
  },
  {
    slug: 'bor-m',
    category: 'fertilizers',
    name: { ar: 'بور إم', en: 'Bor M' },
    description: {
      ar: 'سماد سائل يوفر البورون، ويساعد على تحسين التزهير والعقد وتلبية احتياجات النبات من البورون.',
      en: 'A liquid fertilizer supplying boron to support flowering, fruit set, and the plant’s boron requirements.',
    },
    composition: [
      { ar: 'بورون: 8%.', en: 'Boron: 8%.' },
      { ar: 'موليبدينوم: 0.02%.', en: 'Molybdenum: 0.02%.' },
    ],
    usage: [
      { ar: 'رش ورقي: 100–150 سم³ لكل 100 لتر ماء.', en: 'Foliar spray: 100–150 cm³ per 100 L of water.' },
      { ar: 'التصفية: 500 سم³ للفدان قبل الحصاد بشهر.', en: 'For filtering: 500 cm³ per feddan one month before harvest.' },
    ],
    variants: [{ ar: '1 لتر', en: '1 L' }],
    image: productImage('bor-m.webp'),
  },
  {
    slug: 'arco-iron',
    category: 'fertilizers',
    name: { ar: 'أركو حديد', en: 'Arco Iron' },
    description: {
      ar: 'سماد معدني يمد النبات بالحديد، وهو عنصر يدخل في تركيب الكلوروفيل ويساعد على النمو الصحي.',
      en: 'A mineral fertilizer supplying iron, an element involved in chlorophyll formation and healthy plant growth.',
    },
    composition: [{
      ar: 'حديد: 13% (مخلّب على إيدتا EDTA).',
      en: 'Iron: 13% (chelated with EDTA).',
    }],
    usage: [{ ar: '100–150 جم لكل 100 لتر ماء.', en: '100–150 g per 100 L of water.' }],
    variants: [{ ar: '1 كجم', en: '1 kg' }],
    image: productImage('iron.webp'),
  },
  {
    slug: 'arco-manganese',
    category: 'fertilizers',
    name: { ar: 'أركو منجنيز', en: 'Arco Manganese' },
    description: {
      ar: 'سماد معدني بالمنجنيز لدعم النمو الصحي والعمليات الحيوية وإنتاجية المحاصيل.',
      en: 'A manganese mineral fertilizer supporting healthy growth, biological processes, and crop productivity.',
    },
    composition: [{ ar: 'منجنيز: 13% (مخلّب على إيدتا EDTA).', en: 'Manganese: 13% (chelated with EDTA).' }],
    usage: [{ ar: '100–150 جم لكل 100 لتر ماء.', en: '100–150 g per 100 L of water.' }],
    variants: [{ ar: '1 كجم', en: '1 kg' }],
    image: productImage('arco-manganese.webp'),
  },
  {
    slug: 'arco-mix',
    category: 'fertilizers',
    name: { ar: 'أركو ميكس', en: 'Arco Mix' },
    description: {
      ar: 'سماد معدني يحتوي على العناصر الصغرى بصورة متوازنة لدعم نمو النبات وزيادة المحصول.',
      en: 'A mineral fertilizer with a balanced mix of micronutrients to support plant growth and crop yield.',
    },
    composition: [
      { ar: 'حديد: 5.5%.', en: 'Iron: 5.5%.' },
      { ar: 'منجنيز: 5%.', en: 'Manganese: 5%.' },
      { ar: 'نحاس: 1%.', en: 'Copper: 1%.' },
      { ar: 'زنك: 2% (مخلّب على إيدتا EDTA).', en: 'Zinc: 2% (chelated with EDTA).' },
    ],
    usage: [{ ar: 'رش ورقي: 75–150 جم لكل 100 لتر ماء، ويكرر كل 2–4 أسابيع خلال موسم النمو.', en: 'Foliar spray: 75–150 g per 100 L of water; repeat every 2–4 weeks during the growing season.' }],
    variants: [{ ar: '500 جم', en: '500 g' }, { ar: '1 كجم', en: '1 kg' }],
    image: productImage('arco-mix.webp'),
    featured: true,
  },
  {
    slug: 'arco-zinc-manganese',
    category: 'fertilizers',
    name: { ar: 'أركو زنك منجنيز', en: 'Arco Zinc Manganese' },
    description: {
      ar: 'سماد نيتروجيني مدعم بالزنك والمنجنيز لدعم النمو الخضري، ويستخدم في مراحل النمو الأولى.',
      en: 'A nitrogen fertilizer enriched with zinc and manganese to support vegetative growth, for use in early growth stages.',
    },
    composition: [
      { ar: 'نيتروجين: 31.4%.', en: 'Nitrogen: 31.4%.' },
      { ar: 'منجنيز: 1.3%.', en: 'Manganese: 1.3%.' },
      { ar: 'زنك: 1.3%.', en: 'Zinc: 1.3%.' },
    ],
    usage: [{ ar: '200–500 سم³ لكل 100 لتر ماء.', en: '200–500 cm³ per 100 L of water.' }],
    variants: [{ ar: '1 لتر', en: '1 L' }],
    image: productImage('zn-mn.webp'),
  },
  {
    slug: 'arco-jello-man',
    category: 'fertilizers',
    name: { ar: 'أركو جيلو مان', en: 'Arco Jello Man' },
    description: {
      ar: 'سماد سائل يحتوي على المنجنيز، ويدعم مقاومة ظروف الإجهاد الحيوي وصحة النبات.',
      en: 'A manganese liquid fertilizer that supports plant health and resilience to biotic stress.',
    },
    composition: [
      { ar: 'منجنيز: 6%.', en: 'Manganese: 6%.' },
      { ar: 'حمض الجلوكونيك: 3.5%.', en: 'Gluconic acid: 3.5%.' },
    ],
    usage: [{ ar: 'رش ورقي: 100–150 سم³ لكل 100 لتر ماء، ويكرر 2–3 مرات خلال الموسم.', en: 'Foliar spray: 100–150 cm³ per 100 L of water; repeat 2–3 times during the season.' }],
    variants: [{ ar: '1 لتر', en: '1 L' }],
    image: productImage('jello-man.webp'),
  },
  {
    slug: 'arco-jello-copper',
    category: 'fertilizers',
    name: { ar: 'أركو جيلو نحاس', en: 'Arco Jello Copper' },
    description: {
      ar: 'مركب نحاس عضوي مع حمض الجلوكونيك، يتميز بسرعة الذوبان والامتصاص.',
      en: 'An organic copper compound with gluconic acid, characterized by rapid dissolution and absorption.',
    },
    composition: [
      { ar: 'نحاس: 6%.', en: 'Copper: 6%.' },
      { ar: 'كبريت: 2.7%.', en: 'Sulfur: 2.7%.' },
      { ar: 'حمض الجلوكونيك: 4%.', en: 'Gluconic acid: 4%.' },
    ],
    usage: [
      { ar: 'رش ورقي: 150–200 سم³ لكل 100 لتر ماء.', en: 'Foliar spray: 150–200 cm³ per 100 L of water.' },
      { ar: 'حقن بالتربة: 1.5 لتر للفدان.', en: 'Soil injection: 1.5 L per feddan.' },
    ],
    variants: [{ ar: '500 مل', en: '500 mL' }, { ar: '1 لتر', en: '1 L' }, { ar: '5 لتر', en: '5 L' }],
    image: productImage('jello-cu.webp'),
    featured: true,
  },
  {
    slug: 'arco-magnum',
    category: 'fertilizers',
    name: { ar: 'أركو ماجنم', en: 'Arco Magnum' },
    description: {
      ar: 'سماد يساعد على تحسين النمو الخضري وجودة المحصول، ويدعم تعافي النبات بعد فترات الإجهاد.',
      en: 'A fertilizer that supports vegetative growth and crop quality, and helps plants recover after stress.',
    },
    composition: [
      { ar: 'نيتروجين كلي: 10%.', en: 'Total nitrogen: 10%.' },
      { ar: 'ماغنسيوم: 11%.', en: 'Magnesium: 11%.' },
    ],
    usage: [{ ar: '50 سم³ لكل 100 لتر ماء.', en: '50 cm³ per 100 L of water.' }],
    variants: [{ ar: '200 مل', en: '200 mL' }, { ar: '1 لتر', en: '1 L' }],
    image: productImage('magnum.webp'),
  },
  {
    slug: 'sulfo-cal',
    category: 'salinity-correctors',
    name: { ar: 'سالفو كال', en: 'Sulfo Cal' },
    description: {
      ar: 'مركب لتحسين خواص التربة وتقليل تأثير الأملاح الضارة على النبات وجودة المحصول.',
      en: 'A product that improves soil properties and reduces the effects of harmful salts on plants and crop quality.',
    },
    composition: [
      { ar: 'بوتاسيوم: 15%.', en: 'Potassium: 15%.' },
      { ar: 'كالسيوم: 14%.', en: 'Calcium: 14%.' },
      { ar: 'نيتروجين: 5%.', en: 'Nitrogen: 5%.' },
      { ar: 'كبريت: 11.1%.', en: 'Sulfur: 11.1%.' },
    ],
    usage: [{ ar: '500 جم للفدان.', en: '500 g per feddan.' }],
    variants: [{ ar: '1 كجم', en: '1 kg' }, { ar: '5 كجم', en: '5 kg' }],
    image: productImage('sulfo-cal.webp'),
    featured: true,
  },
  {
    slug: 'anti-salt',
    category: 'salinity-correctors',
    name: { ar: 'أنتي سولت', en: 'Anti Salt' },
    description: {
      ar: 'يساعد على التخلص من الأملاح الضارة وتحسين جودة المحصول وصلابته.',
      en: 'Helps remove harmful salts and improve crop quality and firmness.',
    },
    composition: [{ ar: 'كالسيوم: 35%.', en: 'Calcium: 35%.' }],
    usage: [{ ar: '500 جم–1 كجم للفدان أسبوعيًا.', en: '500 g–1 kg per feddan weekly.' }],
    variants: [{ ar: '1 كجم', en: '1 kg' }, { ar: '5 كجم (3.125 لتر)', en: '5 kg (3.125 L)' }],
    image: productImage('anti-salt.webp'),
  },
  {
    slug: 'silk-power',
    category: 'enhancers',
    name: { ar: 'سيلك باور', en: 'Silk Power' },
    description: {
      ar: 'سماد سائل يحتوي على سيليكات البوتاسيوم لتعزيز مقاومة النبات وتحسين جودة المحصول.',
      en: 'A liquid potassium silicate fertilizer that supports plant resistance and crop quality.',
    },
    composition: [
      { ar: 'بوتاسيوم: 11%.', en: 'Potassium: 11%.' },
      { ar: 'سيليكون: 22%.', en: 'Silicon: 22%.' },
    ],
    usage: [
      { ar: 'رش ورقي: 200 سم³ لكل 100 لتر ماء.', en: 'Foliar spray: 200 cm³ per 100 L of water.' },
      { ar: 'حقن أرضي: 1.5–2 لتر للفدان.', en: 'Soil injection: 1.5–2 L per feddan.' },
    ],
    variants: [{ ar: '500 مل', en: '500 mL' }, { ar: '1 لتر', en: '1 L' }],
    image: productImage('silk-power.webp'),
    featured: true,
  },
  {
    slug: 'jersey-cap-mag',
    category: 'enhancers',
    name: { ar: 'أركو جيرسي كاب ماج', en: 'Arco Jersey Cap Mag' },
    description: {
      ar: 'سماد معدني يساعد على تثبيت العقد وتحسين جودة المحصول وتقليل ظاهرة البلاك ستيم.',
      en: 'A mineral fertilizer that supports fruit set and crop quality and helps reduce black stem.',
    },
    composition: [
      { ar: 'كالسيوم: 22.5%.', en: 'Calcium: 22.5%.' },
      { ar: 'ماغنسيوم: 10%.', en: 'Magnesium: 10%.' },
      { ar: 'بورون: 1%.', en: 'Boron: 1%.' },
    ],
    usage: [{ ar: 'رش ورقي: 75:50 جم لكل 100 لتر ماء.', en: 'Foliar spray: 75:50 g per 100 L of water.' }],
    variants: [{ ar: '1 كجم', en: '1 kg' }],
    image: productImage('jersey-cap-mag.webp'),
  },
  {
    slug: 'cool-surf',
    category: 'enhancers',
    name: { ar: 'أركو كول سيرفس', en: 'Arco Cool Surf' },
    description: {
      ar: 'مادة ناشرة ولاصقة تخفض التوتر السطحي لمحلول الرش، مما يساعد على رفع كفاءة رش المبيدات والأسمدة.',
      en: 'A spreading and sticking agent that lowers spray-solution surface tension to improve pesticide and fertilizer spray performance.',
    },
    composition: [
      { ar: 'بوليسوربات: 10%.', en: 'Polysorbate: 10%.' },
      { ar: 'توين 20: 10%.', en: 'Tween 20: 10%.' },
    ],
    usage: [{ ar: '50 سم³ لكل 100 لتر ماء.', en: '50 cm³ per 100 L of water.' }],
    variants: [{ ar: '200 مل', en: '200 mL' }, { ar: '1 لتر', en: '1 L' }],
    image: productImage('cool-surf.webp'),
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
