import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem('user') || '{}');

  if (!user) {
    navigate('/login');
    return null;
  }

  const goToAddressPage = () => {
    navigate('/address');
  };

  return (
    <div>
      <h2>Bem-vindo ao Dashboard, {user.name}!</h2>
      <button onClick={goToAddressPage}>Cadastrar Endereço</button>
    </div>
  );
};

export default DashboardPage;
