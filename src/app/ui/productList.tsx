import ProductCard from './productCard'

interface Product {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    flavors: string[];
}

interface ProductListProps {
    products: Product[];
  }
  
  const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            flavors={product.flavors}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ProductList;