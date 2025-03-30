import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 15px;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const UserName = styled.span`
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 1024px) {
    display: none;
  }
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

export const PopoverContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 0px;
  background-color: #ff4f0e;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 200px;
  z-index: 1000;
`;

export const PopoverItem = styled.div`
  padding: 10px;
  color: #fff;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color:rgb(255, 139, 97);
  }
`;
