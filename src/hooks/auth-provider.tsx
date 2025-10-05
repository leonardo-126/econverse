import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { createContext, ReactNode, useContext, useState } from "react";

("use client");

interface ManContextType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  logout: () => Promise<void>;
}

const ManContext = createContext<ManContextType | undefined>(undefined);

export const ManProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [value, setValue] = useState("Olá");
  const router = useRouter();

  async function logout() {
    await signOut({
      redirect: false,
    });
    router.replace("/auth");
  }

  return (
    <ManContext.Provider value={{ value, setValue, logout }}>
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
