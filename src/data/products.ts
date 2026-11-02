import { crestDemoProducts } from './crest-demo-products';

const cropSprayerImage = '/images/pexels-stitch-20280081.webp';
const fertilizerImage = '/images/pexels-tahir-osman-109306362-16682802.webp';
const flaskImage = '/images/pexels-mehul-patel-829985-18692575.webp';
const fieldImage = '/images/pexels-tomfisk-5470449.webp';
const labImage = '/images/pexels-mikhail-nilov-9243571.webp';
const factoryImage = '/images/pexels-pixabay-257700.webp';

// DEMO DATA
export type Localized = { ar: string; en: string };
export type CategorySlug = 'pesticides' | 'fertilizers' | 'crest-demo';

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
  gallery?: string[];
  featured?: boolean;
  demo: true;
};

export const categories: Category[] = [
  {
    slug: 'pesticides',
    name: { ar: 'مبيدات', en: 'Pesticides' },
    description: {
      ar: 'مجموعة تجريبية من منتجات حماية المحاصيل.',
      en: 'A sample range of crop protection products.',
    },
    image: cropSprayerImage,
  },
  {
    slug: 'fertilizers',
    name: { ar: 'أسمدة', en: 'Fertilizers' },
    description: {
      ar: 'مجموعة تجريبية من منتجات تغذية النباتات.',
      en: 'A sample range of plant nutrition products.',
    },
    image: fertilizerImage,
  },
  {
    slug: 'crest-demo',
    name: { ar: 'منتجات كريست التجريبية', en: 'Crest demo products' },
    description: {
      ar: 'صور منتجات تجريبية لاختبار عرض الكتالوج.',
      en: 'Demo product images for testing the catalogue.',
    },
    image: '/products/crest-demo-products/%D9%81%D9%84%D8%A7%D9%85.webp',
  },
];

const sampleProducts: Product[] = [
  {
    slug: 'crop-care-a',
    category: 'pesticides',
    name: { ar: 'عناية المحاصيل أ', en: 'Crop Care A' },
    description: {
      ar: 'وصف تجريبي لمنتج من فئة حماية المحاصيل. يُستبدل بالمعلومات المعتمدة قبل النشر.',
      en: 'A sample crop protection product description. Replace with approved information before publishing.',
    },
    composition: { ar: 'بيانات التركيب التجريبية غير متاحة.', en: 'Sample composition details are not available.' },
    usage: { ar: 'تُضاف تعليمات الاستخدام المعتمدة لاحقًا.', en: 'Approved usage instructions to be added.' },
    image: cropSprayerImage,
    featured: true,
    demo: true,
  },
  {
    slug: 'crop-care-b',
    category: 'pesticides',
    name: { ar: 'عناية المحاصيل ب', en: 'Crop Care B' },
    description: {
      ar: 'نموذج تجريبي لعرض شكل صفحات المنتجات.',
      en: 'A sample item to demonstrate the product page layout.',
    },
    composition: { ar: 'بيانات تجريبية — يلزم استبدالها.', en: 'Demo information — must be replaced.' },
    usage: { ar: 'تُضاف تعليمات الاستخدام المعتمدة لاحقًا.', en: 'Approved usage instructions to be added.' },
    image: flaskImage,
    demo: true,
  },
  {
    slug: 'crop-care-c',
    category: 'pesticides',
    name: { ar: 'عناية المحاصيل ج', en: 'Crop Care C' },
    description: {
      ar: 'محتوى تجريبي فقط، وليس وصفًا لمنتج حقيقي.',
      en: 'Demo content only; this does not describe a real product.',
    },
    composition: { ar: 'بيانات تجريبية — يلزم استبدالها.', en: 'Demo information — must be replaced.' },
    usage: { ar: 'تُضاف تعليمات الاستخدام المعتمدة لاحقًا.', en: 'Approved usage instructions to be added.' },
    image: fieldImage,
    demo: true,
  },
  {
    slug: 'plant-nutrition-a',
    category: 'fertilizers',
    name: { ar: 'تغذية النبات أ', en: 'Plant Nutrition A' },
    description: {
      ar: 'وصف تجريبي لمنتج من فئة تغذية النباتات.',
      en: 'A sample plant nutrition product description.',
    },
    composition: { ar: 'بيانات التركيب التجريبية غير متاحة.', en: 'Sample composition details are not available.' },
    usage: { ar: 'تُضاف تعليمات الاستخدام المعتمدة لاحقًا.', en: 'Approved usage instructions to be added.' },
    image: fertilizerImage,
    featured: true,
    demo: true,
  },
  {
    slug: 'plant-nutrition-b',
    category: 'fertilizers',
    name: { ar: 'تغذية النبات ب', en: 'Plant Nutrition B' },
    description: {
      ar: 'نموذج تجريبي لعرض شكل صفحات المنتجات.',
      en: 'A sample item to demonstrate the product page layout.',
    },
    composition: { ar: 'بيانات تجريبية — يلزم استبدالها.', en: 'Demo information — must be replaced.' },
    usage: { ar: 'تُضاف تعليمات الاستخدام المعتمدة لاحقًا.', en: 'Approved usage instructions to be added.' },
    image: labImage,
    demo: true,
  },
  {
    slug: 'plant-nutrition-c',
    category: 'fertilizers',
    name: { ar: 'تغذية النبات ج', en: 'Plant Nutrition C' },
    description: {
      ar: 'محتوى تجريبي فقط، وليس وصفًا لمنتج حقيقي.',
      en: 'Demo content only; this does not describe a real product.',
    },
    composition: { ar: 'بيانات تجريبية — يلزم استبدالها.', en: 'Demo information — must be replaced.' },
    usage: { ar: 'تُضاف تعليمات الاستخدام المعتمدة لاحقًا.', en: 'Approved usage instructions to be added.' },
    image: factoryImage,
    demo: true,
  },
];

export const products: Product[] = [...crestDemoProducts, ...sampleProducts];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
