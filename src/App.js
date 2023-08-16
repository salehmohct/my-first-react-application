import { useRoutes } from "react-router-dom";
import { router } from "./Router";
import GlobalStyle from "./Global/GlobalStyle";
function App() {
  const Router = useRoutes(router);
  return (
    <div className="App">
      <GlobalStyle />
      {Router}
    </div>
  );
}

export default App;
