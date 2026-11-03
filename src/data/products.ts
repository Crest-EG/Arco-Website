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
  composition: Localized;
  usage: Localized;
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

const labelUsage: Localized = {
  ar: 'يرجى اتباع تعليمات الاستخدام المدونة على ملصق العبوة والتواصل مع فريق اركو للاستفسار.',
  en: 'Follow the directions on the product label and contact the Arco team with any questions.',
};

export const products: Product[] = [
  {
    slug: 'arco-k',
    category: 'fertilizers',
    name: { ar: 'أركو ك', en: 'Arco K' },
    description: {
      ar: 'سماد سائل غني بالبوتاسيوم سريع الامتصاص، يساعد على تلبية احتياجات النبات من البوتاسيوم.',
      en: 'A potassium-rich liquid fertilizer formulated for rapid absorption to support the plant’s potassium needs.',
    },
    composition: {
      ar: 'بوتاسيوم في صورة سترات وأسيتات.',
      en: 'Potassium in citrate and acetate forms.',
    },
    usage: labelUsage,
    image: productImage('arco-k.png'),
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
    composition: {
      ar: 'بوتاسيوم (أسيتات البوتاسيوم).',
      en: 'Potassium (potassium acetate).',
    },
    usage: labelUsage,
    image: productImage('potafast.png'),
  },
  {
    slug: 'bor-m',
    category: 'fertilizers',
    name: { ar: 'بور إم', en: 'Bor M' },
    description: {
      ar: 'سماد سائل يوفر البورون، ويساعد على تحسين التزهير والعقد وتلبية احتياجات النبات من البورون.',
      en: 'A liquid fertilizer supplying boron to support flowering, fruit set, and the plant’s boron requirements.',
    },
    composition: {
      ar: 'بورون وموليبدينوم.',
      en: 'Boron and molybdenum.',
    },
    usage: labelUsage,
    image: productImage('bor-m.png'),
  },
  {
    slug: 'arco-iron',
    category: 'fertilizers',
    name: { ar: 'أركو حديد', en: 'Arco Iron' },
    description: {
      ar: 'سماد معدني يمد النبات بالحديد، وهو عنصر يدخل في تركيب الكلوروفيل ويساعد على النمو الصحي.',
      en: 'A mineral fertilizer supplying iron, an element involved in chlorophyll formation and healthy plant growth.',
    },
    composition: {
      ar: 'حديد مخلّب على إيدتا (EDTA).',
      en: 'Iron chelated with EDTA.',
    },
    usage: labelUsage,
    image: productImage('iron.png'),
  },
  {
    slug: 'arco-manganese',
    category: 'fertilizers',
    name: { ar: 'أركو منجنيز', en: 'Arco Manganese' },
    description: {
      ar: 'سماد معدني بالمنجنيز لدعم النمو الصحي والعمليات الحيوية وإنتاجية المحاصيل.',
      en: 'A manganese mineral fertilizer supporting healthy growth, biological processes, and crop productivity.',
    },
    composition: {
      ar: 'منجنيز.',
      en: 'Manganese.',
    },
    usage: labelUsage,
    image: productImage('arco-manganese.png'),
  },
  {
    slug: 'arco-mix',
    category: 'fertilizers',
    name: { ar: 'أركو ميكس', en: 'Arco Mix' },
    description: {
      ar: 'سماد معدني يحتوي على العناصر الصغرى بصورة متوازنة لدعم نمو النبات وزيادة المحصول.',
      en: 'A mineral fertilizer with a balanced mix of micronutrients to support plant growth and crop yield.',
    },
    composition: {
      ar: 'حديد ومنجنيز ونحاس وزنك.',
      en: 'Iron, manganese, copper, and zinc.',
    },
    usage: labelUsage,
    image: productImage('arco-mix.png'),
  },
  {
    slug: 'arco-zinc-manganese',
    category: 'fertilizers',
    name: { ar: 'أركو زنك منجنيز', en: 'Arco Zinc Manganese' },
    description: {
      ar: 'سماد نيتروجيني مدعم بالزنك والمنجنيز لدعم النمو الخضري، ويستخدم في مراحل النمو الأولى.',
      en: 'A nitrogen fertilizer enriched with zinc and manganese to support vegetative growth, for use in early growth stages.',
    },
    composition: {
      ar: 'نيتروجين وزنك ومنجنيز.',
      en: 'Nitrogen, zinc, and manganese.',
    },
    usage: labelUsage,
    image: productImage('zn-mn.png'),
  },
  {
    slug: 'arco-jello-man',
    category: 'fertilizers',
    name: { ar: 'أركو جيلو مان', en: 'Arco Jello Man' },
    description: {
      ar: 'سماد سائل يحتوي على المنجنيز، ويدعم مقاومة ظروف الإجهاد الحيوي وصحة النبات.',
      en: 'A manganese liquid fertilizer that supports plant health and resilience to biotic stress.',
    },
    composition: {
      ar: 'منجنيز وحمض الجلوكونيك.',
      en: 'Manganese and gluconic acid.',
    },
    usage: labelUsage,
    image: productImage('jello-man.png'),
  },
  {
    slug: 'arco-jello-copper',
    category: 'fertilizers',
    name: { ar: 'أركو جيلو نحاس', en: 'Arco Jello Copper' },
    description: {
      ar: 'مركب نحاس عضوي مع حمض الجلوكونيك، يتميز بسرعة الذوبان والامتصاص.',
      en: 'An organic copper compound with gluconic acid, characterized by rapid dissolution and absorption.',
    },
    composition: {
      ar: 'نحاس وكبريت وحمض الجلوكونيك.',
      en: 'Copper, sulfur, and gluconic acid.',
    },
    usage: labelUsage,
    image: productImage('jello-cu.png'),
  },
  {
    slug: 'arco-magnum',
    category: 'fertilizers',
    name: { ar: 'أركو ماجنم', en: 'Arco Magnum' },
    description: {
      ar: 'سماد يساعد على تحسين النمو الخضري وجودة المحصول، ويدعم تعافي النبات بعد فترات الإجهاد.',
      en: 'A fertilizer that supports vegetative growth and crop quality, and helps plants recover after stress.',
    },
    composition: {
      ar: 'نيتروجين وماغنسيوم.',
      en: 'Nitrogen and magnesium.',
    },
    usage: labelUsage,
    image: productImage('magnum.png'),
  },
  {
    slug: 'sulfo-cal',
    category: 'salinity-correctors',
    name: { ar: 'سالفو كال', en: 'Sulfo Cal' },
    description: {
      ar: 'مركب لتحسين خواص التربة وتقليل تأثير الأملاح الضارة على النبات وجودة المحصول.',
      en: 'A product that improves soil properties and reduces the effects of harmful salts on plants and crop quality.',
    },
    composition: {
      ar: 'بوتاسيوم (K₂O) 15%، نيتروجين 5%، كالسيوم (CaO) 14%، كبريت 11.19%.',
      en: 'Potassium (K₂O) 15%, nitrogen 5%, calcium (CaO) 14%, and sulfur 11.19%.',
    },
    usage: labelUsage,
    image: productImage('sulfo-cal.png'),
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
    composition: {
      ar: 'أكسيد الكالسيوم (CaO) بنسبة 35%.',
      en: 'Calcium oxide (CaO) at 35%.',
    },
    usage: labelUsage,
    image: productImage('anti-salt.png'),
  },
  {
    slug: 'silk-power',
    category: 'enhancers',
    name: { ar: 'سيلك باور', en: 'Silk Power' },
    description: {
      ar: 'سماد سائل يحتوي على سيليكات البوتاسيوم لتعزيز مقاومة النبات وتحسين جودة المحصول.',
      en: 'A liquid potassium silicate fertilizer that supports plant resistance and crop quality.',
    },
    composition: {
      ar: 'بوتاسيوم وسيليكون في صورة سيليكات البوتاسيوم.',
      en: 'Potassium and silicon in the form of potassium silicate.',
    },
    usage: labelUsage,
    image: productImage('silk-power.png'),
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
    composition: {
      ar: 'كالسيوم وماغنسيوم وبورون.',
      en: 'Calcium, magnesium, and boron.',
    },
    usage: labelUsage,
    image: productImage('jersey-cap-mag.png'),
  },
  {
    slug: 'cool-surf',
    category: 'enhancers',
    name: { ar: 'أركو كول سيرفس', en: 'Arco Cool Surf' },
    description: {
      ar: 'مادة ناشرة ولاصقة تخفض التوتر السطحي لمحلول الرش، مما يساعد على رفع كفاءة رش المبيدات والأسمدة.',
      en: 'A spreading and sticking agent that lowers spray-solution surface tension to improve pesticide and fertilizer spray performance.',
    },
    composition: {
      ar: 'بوليسوربات وتوين.',
      en: 'Polysorbate and Tween.',
    },
    usage: labelUsage,
    image: productImage('cool-surf.png'),
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
