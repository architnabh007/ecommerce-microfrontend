import { useFetchProductsQuery } from "../services/productService";
import { Card } from "antd";

const ProductList = () => {
  const { data: products, error, isLoading } = useFetchProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;

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

export default ProductList;
