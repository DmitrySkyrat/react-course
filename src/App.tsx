import React from "react";
import "./App.scss";
import { Header } from "./components/header/Header";
import NavMenu from "./components/navMenu/NavMenu";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

const App:React.FC = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <NavMenu />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;