import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Encabezado from "./components/Encabezado";
import PaginaPrincipal from "./pages/PaginaPrincipal";
import OtraPagina from "./pages/OtraPagina";
import PieDePagina from "./components/PieDePagina";
import "./App.css";

function App() {
  return (
    <Router>
      <Encabezado />
      <main>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/otherpage" element={<OtraPagina />} />
        </Routes>
      </main>
      <PieDePagina />
    </Router>
  );
}

export default App;
