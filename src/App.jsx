import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./assets/Header/Header";
import Footer from "./assets/Footer/Footer";
import "./index.css";
import HomePage from "./assets/HomePage/HomePage";
import VuzPage from "./assets/VuzPage/VuzPage";
import SpecialtiesPage from "./assets/SpecialtiesPage/SpecialtiesPage";
import ScrollToTop from "./assets/SpecialtiesPage/hook/ScrollToTop";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/vuz" element={<VuzPage />} />
          <Route path="/specialties" element={<SpecialtiesPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
