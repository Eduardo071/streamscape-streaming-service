import AppRoutes from "./pages/Router";
import { GlobalStyle } from "./globalStyles/styles";

//Função app para retornar as páginas
//add componente de estilo global, oh yes baby
function App() {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
    </>
  )
}

export default App;
