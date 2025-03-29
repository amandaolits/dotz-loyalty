import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { DashboardContainer, ProductsList } from "../styles/DashboardStyles";
import { getProducts } from "../services/products";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const DashboardPage: React.FC = () => {
  const { userEmail } = useUserContext();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  return (
    <DashboardContainer>
      <Header userName={userEmail || "Usuário"} />
      <ProductsList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsList>
    </DashboardContainer>
  );
};

export default DashboardPage;
