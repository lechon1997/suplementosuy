// components/ProductCard.tsx
import Image from 'next/image';
import { Card } from '@tremor/react';
 

// Definición del objeto flavorColors (debe estar en el mismo archivo o importado)
type Flavor = 'Vainilla' | 'Chocolate' | 'Fresa'; // añade más sabores según sea necesario

const flavorColors: { [key in Flavor]: string } = {
  Vainilla: 'bg-yellow-300',
  Chocolate: 'bg-yellow-300', 
  Fresa: 'bg-red-400',
  // otros sabores...
};
  // Definición de ProductCardProps
  interface ProductCardProps {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
    flavors: string[];
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, imageUrl, flavors }) => {
    return (
      <div className="flex flex-col items-center bg-white shadow-md overflow-hidden max-w-7xl">
        <div className=" container p-5">
          <Image src={imageUrl} width={500} height={300} alt={title} priority  />
        </div>
        <div className="pb-4 text-center h-full flex flex-col justify-between">
            <div>
                <h5 className="text-lg m-1 font-semibold tracking-tight text-gray-900">{title}</h5>
            </div>
          
          <div className="">
          <span className="text-2xl font-bold text-gray-900">${price.toFixed(2)}</span>
          <div className="mt-2 flex justify-center">
            {flavors.map((flavor, index) => (
              <span key={index} className={`inline-block ${flavorColors[flavor] || 'bg-gray-200'} rounded-full h-5 w-5 flex items-center justify-center mx-1`}>
                {/* Si necesitas texto o icono dentro del círculo */}
              </span>
            ))}
            </div>
          </div>
        </div>
      </div>

    );
  };
  
  
  
  

export default ProductCard;
