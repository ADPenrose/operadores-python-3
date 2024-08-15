import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header";
import OperatorProvider from "../OperatorProvider";
import OperatorSearch from "../OperatorSearch";
import PageNotFound from "../PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <OperatorProvider>
        <Routes>
          <Route
            index
            path="/"
            element={
              <>
                <Header />
                <OperatorSearch />
              </>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </OperatorProvider>
    </BrowserRouter>
  );
}

export default App;
