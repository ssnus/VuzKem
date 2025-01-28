import Header from "./assets/Header/Header";
import HomePage from "./assets/HomePage/HomePage";
import VuzPage from "./assets/VuzPage/VuzPage";
import Footer from "./assets/Footer/Footer";
import { useState, useEffect } from "react";
import "./index.css";
function App() {
  const [thisComponent, setThisComponent] = useState("home");

  const linkClick = (value) => {
    setThisComponent(value);
  };

  let thisPage;

  switch (thisComponent) {
    case "home":
      thisPage = <HomePage buttonClick={linkClick} />;
      break;

    case "vuz":
      thisPage = <VuzPage />;
      break;

    default:
      break;
  }

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутка вверх после обновления состояния
  }, [thisComponent]);

  return (
    <>
      <Header
        linkClick={linkClick}
        logoClick={linkClick}
        valueColor = {thisComponent}
        isActiveLink = {thisComponent}
      />
      {thisPage}
      <Footer linkClick={linkClick} logoClick={linkClick} />
    </>
  );
}

export default App;
