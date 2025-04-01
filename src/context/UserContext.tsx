import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface UserContextType {
  userEmail: string | null;
  setUserEmail: (email: string | null) => void;
  userBalance: number;
  setUserBalance: React.Dispatch<React.SetStateAction<number>>;
  addresses: AddressFormData[];
  addAddress: (address: AddressFormData) => void;
  userName: string | null;
  setUserName: (name: string | null) => void;
}

interface AddressFormData {
  cep: string;
  street: string;
  number: string;
  complement?: string | null;
  city: string;
  state: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userBalance, setUserBalance] = useState<number>(0);
  const [addresses, setAddresses] = useState<AddressFormData[]>([]);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) setUserEmail(storedEmail);

    const storedName = localStorage.getItem('userName');
    if (storedName) setUserName(storedName);
  }, []);

  useEffect(() => {
    if (userName) {
      localStorage.setItem('userName', userName);
    } else {
      localStorage.removeItem('userName');
    }
  }, [userName]);

  const handleSetUserEmail = (email: string | null) => {
    if (email) {
      localStorage.setItem('userEmail', email);
    } else {
      localStorage.removeItem('userEmail');
    }
    setUserEmail(email);
  };

  const handleSetUserName = (name: string | null) => {
    setUserName(name);
  };

  const addAddress = (address: AddressFormData) => {
    setAddresses((prevAddresses) => [...prevAddresses, address]);
  };

  return (
    <UserContext.Provider
      value={{
        userEmail,
        userBalance,
        setUserBalance,
        setUserEmail: handleSetUserEmail,
        addresses,
        addAddress,
        userName,
        setUserName: handleSetUserName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
