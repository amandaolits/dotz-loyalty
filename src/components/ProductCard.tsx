import React, { useState, useEffect } from "react";
import { Card, Price, ProductImage, Text, Button, TitleModal } from "../styles/ProductCardsStyles";
import { useUserContext } from "../context/UserContext";
import axios from "axios";
import Modal from "../components/Modal";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const API_URL = "http://localhost:5000";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { userEmail, setUserBalance } = useUserContext();
  const [userBalance, setBalance] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (userEmail) {
      axios
        .get(`${API_URL}/users?email=${userEmail}`)
        .then((response) => {
          const user = response.data[0];
          if (user) {
            setBalance(user.balance);
          }
        })
        .catch((error) => console.error("Erro ao buscar saldo:", error));
    }
  }, [userEmail]);

  const handleResgatar = () => {
    setIsModalOpen(true);
  };

  const handleConfirmResgate = async () => {
    if (userBalance < product.price) {
      alert("Saldo insuficiente.");
      setIsModalOpen(false);
      return;
    }
  
    const novoSaldo = userBalance - product.price;
  
    try {
      const response = await axios.get(`${API_URL}/users?email=${userEmail}`);
      const user = response.data[0];
  
      if (!user) {
        alert("Usuário não encontrado.");
        setIsModalOpen(false);
        return;
      }
  
      await axios.patch(`${API_URL}/users/${user.id}`, { balance: novoSaldo });
  
      const novaTransacao = {
        userEmail,
        type: "debit",
        points: product.price,
        date: `${String(new Date().getDate()).padStart(2, '0')}/${String(new Date().getMonth() + 1).padStart(2, '0')}/${new Date().getFullYear()}`,
        description: `resgate do produto: ${product.name}`,
      };
  
      await axios.post(`${API_URL}/transactions`, novaTransacao);
  
      setBalance(novoSaldo);
      setUserBalance(novoSaldo);
  
      alert(`🎉 Resgate realizado com sucesso! Você resgatou: ${product.name}`);
  
      setIsModalOpen(false);

      window.location.reload();
    } catch (error) {
      console.error("Erro ao processar resgate:", error);
      alert("Ocorreu um erro ao processar o resgate.");
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <Card>
        <ProductImage src={product.image} alt={product.name} />
        <Text>{product.name}</Text>
        <Price>{product.price} Dotz</Price>
        <Button onClick={handleResgatar}>Resgatar</Button>
      </Card>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <TitleModal>Confirmar resgate</TitleModal>
          <p>🎁 Produto: <strong>{product.name}</strong></p>
          <p>💰 Valor: <strong>{product.price} Dotz</strong></p>
          <p>💳 Saldo atual: <strong>{userBalance ? userBalance : '0'} Dotz</strong></p>
          <Button className="confirm" onClick={handleConfirmResgate}>Confirmar</Button>
          <Button className="cancel" onClick={() => setIsModalOpen(false)} style={{backgroundColor: '#a0a0a0'}}>Cancelar</Button>
        </Modal>
      )}
    </>
  );
};

export default ProductCard;
