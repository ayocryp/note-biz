import React, { createContext, useState, useContext } from "react";

interface PayContextType {
  isPaid: boolean;
  setIsPaid: React.Dispatch<React.SetStateAction<boolean>>;
}

const PayContext = createContext<PayContextType | undefined>(undefined);

const PayProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPaid, setIsPaid] = useState(false);

  return (
    <PayContext.Provider value={{ isPaid, setIsPaid }}>
      {children}
    </PayContext.Provider>
  );
};

const usePayContext = () => {
  const context = useContext(PayContext);
  if (!context) {
    throw new Error("usePayContext must be used within an PayProvider");
  }
  return context;
};

export { PayProvider, usePayContext };
