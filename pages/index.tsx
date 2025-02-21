import { useFetchProductsQuery } from "../services/productService";
import { Card, Spin, Alert } from "antd";

const Home = () => {
  const { data: products, error, isLoading } = useFetchProductsQuery();

  if (isLoading) return <Spin tip="Loading..." />;
  if (error) return <Alert message="Error fetching products" type="error" />;

  return (
    <div className="container">
      {products.map((product) => (
        <Card key={product.id} className="product-card">
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} />
        </Card>
      ))}
    </div>
  );
};

export default Home;
