import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import {
  DashboardContainer,
  ContentWrapper,
  Sidebar,
  CategoryList,
  CategoryItem,
  ProductsSection,
  SearchContainer,
  SearchInput,
  SearchIcon,
} from "../styles/DashboardStyles";
import { getProducts } from "../services/products";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const DashboardPage: React.FC = () => {
  const { userEmail } = useUserContext();
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  const categories = Array.from(new Set(products.map((product) => product.category)));

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <DashboardContainer>
      <Header />
      <h1>Troque por produtos</h1>
      <p>São milhares de produtos de diversas categorias e valores pra você escolher!</p>
      <SearchContainer>
        <SearchIcon src="/assets/search.svg" alt="Ícone de busca" />
        <SearchInput
          type="text"
          placeholder="Digite o produto, marca ou modelo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      <ContentWrapper>
        <Sidebar>
          <h2>Categorias</h2>
          <CategoryList>
            <CategoryItem
              onClick={() => setSelectedCategory(null)}
              isSelected={selectedCategory === null}
            >
              Todas
            </CategoryItem>
            {categories.map((category) => (
              <CategoryItem
                key={category}
                onClick={() => setSelectedCategory(category)}
                isSelected={selectedCategory === category}
              >
                {category}
              </CategoryItem>
            ))}
          </CategoryList>
        </Sidebar>
        <ProductsSection>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsSection>
      </ContentWrapper>
    </DashboardContainer>
  );
};

export default DashboardPage;
