import React, { useState } from "react";

import FilterPrice from "./components/FilterPrice/FilterPrice";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import { use } from "react";

function App() {
  const [isFilterActive, setIsFilterActive] = useState(false);

  return (
    <>
      <Header />
      <FilterPrice
        isFilterActive={isFilterActive}
        setIsFilterActive={setIsFilterActive}
      />
      <Main isFilterActive={isFilterActive} />
      <Footer />
    </>
  );
}

export default App;
