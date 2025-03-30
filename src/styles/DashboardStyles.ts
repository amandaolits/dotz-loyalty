import styled from "styled-components";

export const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin: 40px 0 20px 0;
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  background-color: transparent;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-bottom: 2px solid #FF4F0E;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`;

export const Sidebar = styled.aside`
  width: 200px;
  margin-right: 20px;
`;

export const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CategoryItem = styled.li<{ isSelected: boolean }>`
  padding: 10px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "#FF4F0E" : "transparent")};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#000")};
  border-radius: 4px;
  margin-bottom: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF4F0E;
    color: #fff;
  }
`;

export const ProductsSection = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;
