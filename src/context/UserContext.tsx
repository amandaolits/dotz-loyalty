import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface UserContextType {
  userEmail: string | null;
  setUserEmail: (email: string) => void;
  addresses: AddressFormData[];
  addAddress: (address: AddressFormData) => void;
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
  const [addresses, setAddresses] = useState<AddressFormData[]>([]);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  const handleSetUserEmail = (email: string) => {
    localStorage.setItem('userEmail', email);
    setUserEmail(email);
  };

  const addAddress = (address: AddressFormData) => {
    setAddresses((prevAddresses) => [...prevAddresses, address]);
  };

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail: handleSetUserEmail, addresses, addAddress }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
