import React from "react";

import { CoffeeContextProvider } from "./Context/coffeeContext";
import { Home } from "./Pages";

function App() {
  return (
    <CoffeeContextProvider>
      <Home />
    </CoffeeContextProvider>
  );
}

export default App;
