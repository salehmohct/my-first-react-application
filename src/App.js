import { useRoutes } from "react-router-dom";
import { router } from "./Router";
import GlobalStyle from "./Global/GlobalStyle";
import { Suspense } from "react";
function App() {
  const Router = useRoutes(router);
  return (
    <div className="App">
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>{Router}</Suspense>
    </div>
  );
}

export default App;
