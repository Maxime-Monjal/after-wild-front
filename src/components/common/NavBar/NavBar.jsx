import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../../assets/icon/home-icon.png";
import goldenBook from "../../../assets/icon/goldenbook.png";
import wildLogo from "../../../assets/logo/wild.png";
import style from "./NavBar.module.css";

function NavBar() {
  return (
    <div>
      <header className={style.header}>
        <div className={style.navbar}>
          <Link to="/">
            <img className={style.homeIcon} src={homeIcon} alt="home" />
          </Link>
          <h1>After Wild</h1>
          <Link to="/post">
            <img
              className={style.goldenBook}
              src={goldenBook}
              alt="Livre d'or"
            />
          </Link>
        </div>
      </header>
      <div className={style.containerLogo}>
        <img className={style.logo} src={wildLogo} alt="logo-wild" />
      </div>
    </div>
  );
}

export default NavBar;
