import AppRoutes from "./pages/Router";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";

//Função app para retornar as páginas
//add componente de estilo global
function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

export default App;
