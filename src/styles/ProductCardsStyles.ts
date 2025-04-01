import styled from "styled-components";

export const Card = styled.div`
  border: 2px solid #EAEAEA;
  padding: 16px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  height: 140px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: #FF4F0E;
  color: #fff;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #ff7f45;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleModal = styled.p`
  font-size: 24px;
  margin: 0 0 30px 0;
  font-weight: 500;
  text-align: center;
`;
