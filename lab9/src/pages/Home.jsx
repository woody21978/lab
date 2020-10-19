import React from "react";
import "../css/App.scss";
import Menu from "../components/menu/Menu.jsx";
function Home() {
  return (
    <div className="wrapper">
      <Menu />
      <section className="section">Home</section>
    </div>
  );
}

export default Home;
