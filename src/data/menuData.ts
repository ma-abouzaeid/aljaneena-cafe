import { getImagePath } from '@/utils/imagePath';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  popular?: boolean;
}

export interface MenuCategory {
  id: 'hot' | 'cold' | 'shisha';
  name: string;
  englishName: string;
  subtitle: string;
  iconName: 'Coffee' | 'GlassWater' | 'Flame';
  image: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'hot',
    name: 'المشروبات الساخنة',
    englishName: 'Hot Drinks',
    subtitle: 'دفء في كل كوب',
    iconName: 'Coffee',
    image: getImagePath('/images/hot-drinks-cat.jpg'),
    items: [
      { id: 'h1', name: 'شاي', price: 10 },
      { id: 'h2', name: 'شاي فتله', price: 15 },
      { id: 'h3', name: 'شاي بلبن', price: 20 },
      { id: 'h4', name: 'قهوه', price: 25, popular: true },
      { id: 'h5', name: 'قهوه فرنساوي', price: 35 },
      { id: 'h6', name: 'قهوه بندق', price: 35, popular: true },
      { id: 'h7', name: 'حلبه', price: 15 },
      { id: 'h8', name: 'حلبه بلبن', price: 20 },
      { id: 'h9', name: 'ينسون', price: 15 },
      { id: 'h10', name: 'ينسون ليمون - عسل', price: 15 },
      { id: 'h11', name: 'كوفي ميكس', price: 20 },
      { id: 'h12', name: 'كوفي ميكس بلبن', price: 25 },
      { id: 'h13', name: 'نسكافيه', price: 25 },
      { id: 'h14', name: 'بونجورنو', price: 30 },
      { id: 'h15', name: 'هوت شوكليت', price: 25 },
      { id: 'h16', name: 'هوت سيدر', price: 25 },
      { id: 'h17', name: 'سحلب', price: 30 },
      { id: 'h18', name: 'سحلب مكسرات', price: 35, popular: true },
      { id: 'h19', name: 'سحلب فواكهه', price: 40 },
      { id: 'h20', name: 'حمص', price: 30 },
      { id: 'h21', name: 'اندومي', price: 15 },
      { id: 'h22', name: 'نسكافيه بلاك', price: 15 },
      { id: 'h23', name: 'براد شاي قرنفل - نعناع', price: 25, popular: true },
    ],
  },
  {
    id: 'cold',
    name: 'المشروبات الباردة',
    englishName: 'Cold Drinks',
    subtitle: 'انتعاش بطعم مختلف',
    iconName: 'GlassWater',
    image: getImagePath('/images/cold-drinks-cat.jpg'),
    items: [
      { id: 'c1', name: 'ايس كوفي', price: 35, popular: true },
      { id: 'c2', name: 'ليمون', price: 25 },
      { id: 'c3', name: 'ليمون نعناع - فرنساوي', price: 30, popular: true },
      { id: 'c4', name: 'مانجو', price: 35 },
      { id: 'c5', name: 'زبادي مانجو', price: 45, popular: true },
      { id: 'c6', name: 'زبادي فواكهه', price: 50 },
      { id: 'c7', name: 'فراوله', price: 35 },
      { id: 'c8', name: 'زبادي فراوله', price: 45 },
      { id: 'c9', name: 'كنتالوب', price: 35 },
      { id: 'c10', name: 'جوافه - بلبن', price: 35 },
      { id: 'c11', name: 'برتقال', price: 25 },
      { id: 'c12', name: 'بوريو', price: 35, popular: true },
      { id: 'c13', name: 'مياه', price: 10 },
    ],
  },
  {
    id: 'shisha',
    name: 'الشيشة',
    englishName: 'Shisha',
    subtitle: 'جلسة بطعم أجمل',
    iconName: 'Flame',
    image: getImagePath('/images/shisha-cat.jpg'),
    items: [
      { id: 's1', name: 'حجر قص', price: 10 },
      { id: 's2', name: 'حجر سلوم', price: 10 },
      { id: 's3', name: 'حجر زغلول', price: 15 },
      { id: 's4', name: 'حجر فواكهه', price: 35, popular: true },
      { id: 's5', name: 'حجر فواكهه فاخر', price: 70, popular: true },
    ],
  },
];
