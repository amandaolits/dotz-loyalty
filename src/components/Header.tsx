import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, UserSection, UserName, UserIcon, PopoverContainer, PopoverItem } from '../styles/HeaderStyles';
import { useUserContext } from '../context/UserContext';
import axios from 'axios';

const Header: React.FC = () => {
  const { userEmail } = useUserContext();
  const [userName, setUserName] = useState<string>("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (userEmail) {
      axios.get(`http://localhost:5000/users?email=${userEmail}`)
        .then(response => {
          const user = response.data[0];
          if (user) {
            setUserName(user.name);
          }
        })
        .catch(error => console.error('Erro ao buscar dados do usuário:', error));
    }
  }, [userEmail]);

  const handleLogoClick = () => {
    navigate('/dashboard');
  };

  const handleUserIconClick = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  const handleLogout = () => {
    navigate('/');
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsPopoverOpen(false);
      }
    }

    if (isPopoverOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPopoverOpen]);

  return (
    <HeaderContainer>
      <img
        src="/assets/dotz-logo.svg"
        alt="Logo Dotz"
        height={30}
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }}
      />
      <UserSection>
        {userName && <UserName>{userName}</UserName>}
        <UserIcon onClick={handleUserIconClick}>
          <img src="/assets/user-icon.png" alt="Ícone de usuário" width={24} height={24} />
        </UserIcon>
        {isPopoverOpen && (
          <PopoverContainer ref={popoverRef}>
            <PopoverItem onClick={() => navigate('/dashboard')}>Catálogo</PopoverItem>
            <PopoverItem onClick={() => navigate('/statement')}>Meu extrato</PopoverItem>
            <PopoverItem onClick={() => navigate('/address')}>Meus endereços</PopoverItem>
            <PopoverItem onClick={() => navigate('/requests')}>Meus pedidos</PopoverItem>
            <PopoverItem onClick={handleLogout}>Sair</PopoverItem>
          </PopoverContainer>
        )}
      </UserSection>
    </HeaderContainer>
  );
};

export default Header;