import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import OtherPage from "./pages/OtherPage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/otherpage" element={<OtherPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
