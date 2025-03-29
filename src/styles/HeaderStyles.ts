import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 15px;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ff4f0e;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;
