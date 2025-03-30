import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { getTransactions } from "../services/transactions";
import { StatementContainer, Card } from "../styles/StatementStyles";
import axios from "axios";
import Header from "../components/Header";

interface Transaction {
  id: number;
  type: "credit" | "debit";
  points: number;
  date: string;
  description: string;
  userEmail: string;
}

const StatementPage: React.FC = () => {
  const { userEmail } = useUserContext();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    if (userEmail) {
      axios.get(`http://localhost:5000/users?email=${userEmail}`)
        .then((response) => {
          const user = response.data[0];
          if (user) {
            setBalance(user.balance);

            getTransactions().then((userTransactions) => {
              const filteredTransactions = userTransactions.filter(
                (transaction: Transaction) => transaction.userEmail === userEmail
              );
              setTransactions(filteredTransactions);
            });
          }
        })
        .catch((error) => console.error("Erro ao buscar dados do usuário:", error));
    }
  }, [userEmail]);

  return (    
    <StatementContainer>        
      <Header />      
      <Card>
        <h2>Saldo Atual: {balance ? balance : 0} Dotz</h2>
      </Card>

      <h3>Minhas Transações</h3>

      {transactions.length === 0 ? (
        <p>Você ainda não realizou nenhuma transação.</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              Na data <strong>{transaction.date}</strong>, você realizou o <strong>{transaction.description}</strong> no valor de <strong>{transaction.points} Dotz.</strong>
            </li>
          ))}
        </ul>
      )}
    </StatementContainer>
  );
};

export default StatementPage;
