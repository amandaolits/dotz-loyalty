import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 24px;
  }

  button {
    background-color: #FF4F0E;
    color: white;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
`;

export const NoAddresses = styled.p`
  text-align: center;
  color: gray;
`;

export const AddressList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f5f5f5;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
  }

  img {
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;

  h2 {
    margin: 0 0 20px 0;
  }

  form div {
    text-align: left;
  }

  label {
    display: block;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
  }

  span {
    color: red;
    font-size: 12px;
  }

  input {
    padding: 4px 0;
    width: 100%;
    outline: none;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #ccc;
    transition: border-color 0.3s ease;

    &::placeholder {
      color: #888;
      font-size: 14px;
    }

    &:focus {
      border-bottom: 2px solid #FF4F0E;
    }

    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }

  button {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  button:first-of-type {
    background-color: #FF4F0E;
    color: white;
  }

  button:last-of-type {
    background-color: #ccc;
    margin-top: 5px;
  }
`;
