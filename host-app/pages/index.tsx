import dynamic from 'next/dynamic';

const ProductList = dynamic(() => import('productsRemote/ProductList'), { ssr: false });
const Basket = dynamic(() => import('basketRemote/Basket'), { ssr: false });

const Home = () => {
  return (
    <div className="container">
      <h1>Micro Frontend E-Commerce</h1>
      <ProductList />
      <Basket />
    </div>
  );
};

export default Home;
