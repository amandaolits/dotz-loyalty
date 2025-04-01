import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer, UserSection, UserName, UserIcon, PopoverContainer, PopoverItem } from '../styles/HeaderStyles';
import { useUserContext } from '../context/UserContext';

const Header: React.FC = () => {
  const { userName, setUserEmail, setUserName } = useUserContext();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/dashboard');
  };

  const handleUserIconClick = () => {
    setIsPopoverOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');

    setUserEmail(null);
    setUserName(null);

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
            <PopoverItem onClick={handleLogout}>Sair</PopoverItem>
          </PopoverContainer>
        )}
      </UserSection>
    </HeaderContainer>
  );
};

export default Header;