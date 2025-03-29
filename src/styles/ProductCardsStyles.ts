import styled from "styled-components";

export const Card = styled.div`
  border: 2px solid #EAEAEA;
  padding: 16px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  max-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Text = styled.p`
  color: #000;
  font-weight: bold;
  font-size: 16px;
  margin: 20px 0 10px 0px;
`;
export const Price = styled.p`
  color: #ff4f0e;
  font-weight: bold;
  font-size: 20px;
  margin: 0;
`;

export const ProductImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;