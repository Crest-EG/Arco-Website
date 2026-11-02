export const site = {
  name: {
    en: 'Arco Chemicals',
    ar: 'اركو للكيماويات',
  },
  shortName: {
    en: 'Arco',
    ar: 'اركو',
  },
  legalName: 'اركو للكيماويات',
  phone: '010 80021195',
  phoneInternational: '+20 10 80021195',
  whatsappNumber: '201080021195',
  instagram: 'https://www.instagram.com/arcochemicals1',
  facebook: 'https://www.facebook.com/arcochemicals1/',
  factory: {
    en: 'South of the 3rd Industrial Zone, Borg El Arab, Alexandria, Egypt',
    ar: 'جنوب المنطقة الصناعية الثالثة، برج العرب، الإسكندرية، مصر',
  },
  factoryMap: 'https://maps.google.com/maps?q=30.8450646%2C29.6111098&z=17&hl=en',
  office: {
    en: 'D Entrance, Grand Towers, Smouha 21523, Alexandria, Egypt',
    ar: 'مدخل D، جراند تاورز، سموحة 21523، الإسكندرية، مصر',
  },
  officeMap: 'https://maps.app.goo.gl/8LvtaXWh1MoNN7gq5',
  email: 'info@crest-chemicals.com',
  servicesEnabled: true,
} as const;

export const locales = ['ar', 'en'] as const;
export type Locale = (typeof locales)[number];
