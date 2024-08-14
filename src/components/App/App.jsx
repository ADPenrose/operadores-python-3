import React from "react";
import Header from "../Header";
import OperatorProvider from "../OperatorProvider";
import OperatorSearch from "../OperatorSearch";

function App() {
  return (
    <OperatorProvider>
      <Header />
      <OperatorSearch />
    </OperatorProvider>
  );
}

export default App;
