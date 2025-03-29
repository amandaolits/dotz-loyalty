import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LeftSide = styled.div`
  background-color: #FF4F0E;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const RightSide = styled.div`
  width: 40%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 20px;
  }

  h1 {
    margin-bottom: 20px;
  }
`;

export const LogoImage = styled.img`
  width: 20%;
  height: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-top: 50px;

  @media (max-width: 1024px) {
    max-width: 90%;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px 0;
  font-size: 16px;
  width: 100%;
  outline: none;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #ccc;
  margin-bottom: 15px;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-bottom: 2px solid #FF4F0E;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #FF4F0E;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  font-weight: bold;

  &:hover {
    background-color: #e14c00;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
