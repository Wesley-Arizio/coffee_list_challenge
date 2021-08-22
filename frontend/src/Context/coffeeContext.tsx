import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api";

interface Coffee {
  id: string;
  name: string;
  description: string;
}
interface CoffeeContextProps {
  coffees: Coffee[];
  isLoading: boolean;
  error?: string;
}

const CoffeeContext = createContext<CoffeeContextProps>(
  {} as CoffeeContextProps
);

export const CoffeeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const response = await api.get("/coffee");

      if (response.status !== 200) {
        setError("Something went wrong");
      } else {
        const { data } = response.data;

        setCoffees(() => [...(data as Coffee[])]);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <CoffeeContext.Provider value={{ coffees, isLoading, error }}>
      {children}
    </CoffeeContext.Provider>
  );
};

export const useCoffeeContext = (): CoffeeContextProps =>
  useContext(CoffeeContext);
