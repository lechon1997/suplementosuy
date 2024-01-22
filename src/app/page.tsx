import { Title, Text } from '@tremor/react';
import ProductList from './ui/productList';

export default async function IndexPage({
}: {
}) {
  
  
  return (
    <main className="p-4 md:p-10 mx-auto">
      <Title>Users</Title>
      <Text>A list of users retrieved from a Postgres database.</Text>
      <ProductList products={arrayOfProducts} />
    </main>
  );
}

const arrayOfProducts = [
  {
    id: 1,
    title: 'GOLD NUTRITION 100% WHEY PRO',
    price: 59.99,
    imageUrl: 'https://i.imgur.com/p6NGwgu.jpg',
    flavors: ['Vainilla', 'Chocolate', 'Fresa']
  },
  {
    id: 2,
    title: 'PLATINUM CASEIN PRO',
    price: 65.50,
    imageUrl: 'https://i.imgur.com/rncLh3z.jpg',
    flavors: ['Vainilla', 'Chocolate', 'Fresa']
  },
  {
    id: 3,
    title: 'SILVER MASS GAINER',
    price: 45.99,
    imageUrl: 'https://i.imgur.com/Nc7aAyM.png',
    flavors: ['Vainilla', 'Chocolate', 'Fresa']
  },
  {
    id: 4,
    title: 'BRONZE DIET WHEY',
    price: 39.99,
    imageUrl: 'https://i.imgur.com/InOtKFv.jpg',
    flavors: ['Vainilla', 'Chocolate', 'Fresa']
  },
  {
    id: 5,
    title: 'IRON VEGAN PROTEIN',
    price: 70.00,
    imageUrl: 'https://i.imgur.com/SJi1xMc.png',
    flavors: ['Vainilla', 'Chocolate', 'Fresa']
  },
  {
    id: 6,
    title: 'ENERGY PROTEIN SHAKE',
    price: 34.99,
    imageUrl: 'https://i.imgur.com/QxRacRV.jpg',
    flavors: ['Vainilla', 'Chocolate', 'Fresa']
  },
  {
    id: 7,
    title: 'RECOVERY HYDRO WHEY',
    price: 59.99,
    imageUrl: 'https://i.imgur.com/vdsoS1y.jpg',
    flavors: ['Vainilla', 'Chocolate', 'Fresa']
  },
  {
    id: 8,
    title: 'STRENGTH COLLAGE PRO',
    price: 49.49,
    imageUrl: 'https://i.imgur.com/ABB8BEm.jpg',
    flavors: ['Vainilla', 'Chocolate', 'Fresa']
  },
  {
    id: 9,
    title: 'LEAN MUSCLE BUILDER',
    price: 55.55,
    imageUrl: 'https://i.imgur.com/y121k7V.jpg',
    flavors: ['Vainilla', 'Chocolate', 'Fresa']
  },
  {
    id: 10,
    title: 'ULTIMATE PROTEIN BLEND',
    price: 60.00,
    imageUrl: 'https://i.imgur.com/dzD4uvO.jpg',
    flavors: ['Vainilla', 'Chocolate', 'Fresa']
  }
];

