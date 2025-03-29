import React from "react";
import { HeaderContainer, UserSection, UserName, UserIcon } from "../styles/HeaderStyles";

interface HeaderProps {
  userName?: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <HeaderContainer>
      <img src="/assets/dotz-logo.svg" alt="Logo Dotz" height={30}/>
      <UserSection>
        {userName && <UserName>Bem-vindo, {userName}!</UserName>}
        <UserIcon>
        <img src="/assets/user-icon.png" alt="Ícone de usuário" width={24} height={24} />
        </UserIcon>
      </UserSection>
    </HeaderContainer>
  );
};

export default Header;