import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api";

export interface Coffee {
  id: string;
  name: string;
  description: string;
}
interface CoffeeContextProps {
  coffees: Coffee[];
  isLoading: boolean;
  error?: string;
  deleteCoffee: (id: string) => Promise<void>;
  updateCoffee: (coffee: Coffee) => Promise<void>;
  saveCoffee: (coffee: Omit<Coffee, "id">) => Promise<void>;
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

  const deleteCoffee = async (id: string) => {
    try {
      const response = await api.delete(`/coffee/${id}`);

      if (response.status !== 200) {
        setError("Something went wrong");
      } else {
        setCoffees((c) => c.filter((item) => item.id !== id));
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const updateCoffee = async (coffee: Coffee): Promise<void> => {
    try {
      const response = await api.patch(`/coffee/${coffee.id}`, {
        name: coffee.name,
        description: coffee.description,
      });

      if (response.status !== 200) {
        setError("Something went wrong");
      } else {
        const otherCoffees = coffees.filter((item) => item.id !== coffee.id);
        setCoffees([...otherCoffees, response.data.data]);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const saveCoffee = async (coffee: Omit<Coffee, "id">): Promise<void> => {
    try {
      const response = await api.post(`/coffee`, {
        name: coffee.name,
        description: coffee.description,
      });

      if (response.status !== 200) {
        setError("Something went wrong");
      } else {
        setCoffees([...coffees, response.data.data]);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        isLoading,
        error,
        deleteCoffee,
        updateCoffee,
        saveCoffee,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};

export const useCoffeeContext = (): CoffeeContextProps =>
  useContext(CoffeeContext);
