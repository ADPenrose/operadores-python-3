import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { OPERATORS } from "../../data";

export const OperatorContext = React.createContext();

function OperatorProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const selectedOperator = searchParams.get("operator") ?? "";
  const operatorSymbol =
    OPERATORS.find(({ name }) => name === selectedOperator)?.operator ??
    selectedOperator;

  function setSelectedOperator(userOperator) {
    // Hay que tomar al operador dado, y obtener su nombre.
    const operator =
      OPERATORS.find(({ operator }) => operator === userOperator)?.name ??
      userOperator;
    // Si el operador es un empty string, hay que navegar a la index route.
    if (operator === "") {
      navigate("/");
      return;
    }
    setSearchParams({ operator });
  }

  return (
    <OperatorContext.Provider
      value={{
        selectedOperator,
        setSelectedOperator,
        operatorSymbol,
      }}
    >
      {children}
    </OperatorContext.Provider>
  );
}

export default OperatorProvider;
