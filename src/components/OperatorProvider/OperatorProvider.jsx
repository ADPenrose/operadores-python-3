import React from "react";

export const OperatorContext = React.createContext();

function OperatorProvider({ children }) {
  const [selectedOperator, setSelectedOperator] = React.useState("");

  function handleOperatorCleaning() {
    setSelectedOperator("");
  }

  return (
    <OperatorContext.Provider
      value={{ selectedOperator, setSelectedOperator, handleOperatorCleaning }}
    >
      {children}
    </OperatorContext.Provider>
  );
}

export default OperatorProvider;
