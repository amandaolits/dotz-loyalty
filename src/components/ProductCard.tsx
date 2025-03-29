import React from "react";
import { Card, Price, ProductImage, Text } from "../styles/ProductCardsStyles";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <Text>{product.name}</Text>
      <Price>{product.price} DOTZ</Price>
    </Card>
  );
};

export default ProductCard;