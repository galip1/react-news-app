import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <h1>Haber Kaynağı</h1>
      <nav>
        <ul>
          <li>
            <a href="#">Ana Sayfa</a>
          </li>
          <li>
            <a href="#">Kategoriler</a>
          </li>
          <li>
            <a href="#">Hakkında</a>
          </li>
          <li>
            <a href="#">İletişim</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
