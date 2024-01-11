import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Projects from "./components/pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Container customClass="min_height"><Home /></Container>} />
        <Route path="/projects" element={<Container customClass="min_height"><Projects /></Container>} />
        <Route path="/company" element={<Container customClass="min_height"><Company /></Container>} />
        <Route path="/contact" element={<Container customClass="min_height"><Contact /></Container>} />
        <Route path="/newproject" element={<Container customClass="min_height"><NewProject /></Container>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
