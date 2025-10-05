"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ManContextType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const ManContext = createContext<ManContextType | undefined>(undefined);

export const ManProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [value, setValue] = useState("Olá");

  return (
    <ManContext.Provider value={{ value, setValue }}>
      {children}
    </ManContext.Provider>
  );
};

export const useMan = (): ManContextType => {
  const context = useContext(ManContext);
  if (!context) {
    throw new Error("useMan deve ser usado dentro de um ManProvider");
  }
  return context;
};
