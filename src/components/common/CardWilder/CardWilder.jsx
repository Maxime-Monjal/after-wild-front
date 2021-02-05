import React from "react";
import { Link } from "react-router-dom";
import style from "./CardWilder.module.css";

function CardWilder({ wilder }) {
  const {
    firstname,
    lastname,
    picture,
    description,
    linkedin,
    github,
    idwilders,
  } = wilder;
  return (
    <div className={style.CardWilder}>
      <div className="name">
        <h2>{firstname}</h2>
        <h3>{lastname} </h3>
      </div>
      <img src={picture} className={style.img} alt="profil" />
      <p className={style.description}>{description}</p>
      <div>
        <a className={style.link} href={linkedin}>
          LinkedIn
        </a>
        <a className={style.link} href={github}>
          Github
        </a>
      </div>
      <Link to={`/profil/${idwilders}`}>
        <button className={style.button} type="submit">
          Modifier son profil
        </button>
      </Link>
    </div>
  );
}

export default CardWilder;
