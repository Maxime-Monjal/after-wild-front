import React, { useEffect, useState } from "react";
import CardWilder from "../components/common/CardWilder/CardWilder";
import axios from "axios";
import style from "../components/Wilders/Wilders.module.css";

function Profil(props) {
  const [wilder, setWilder] = useState([]);
  const idwilders = props.match.params.id;

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/profil/${idwilders}`)
      .then((res) => res.data)
      .then((data) => {
        setWilder(data);
      });
  }, [idwilders]);

  console.log(idwilders);
  console.log(wilder);

  return (
    <div className={style.container}>
      <CardWilder wilder={wilder} />
    </div>
  );
}

export default Profil;
