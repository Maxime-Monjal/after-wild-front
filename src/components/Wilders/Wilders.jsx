import React, { useEffect, useState } from "react";
import CardWilder from "../common/CardWilder/CardWilder";
import axios from "axios";
import style from "./Wilders.module.css";

function Wilders() {
  const [wilder, setWilder] = useState([]);

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/`)
      .then((res) => res.data)
      .then((data) => {
        setWilder(data);
      });
  }, []);

  return (
    <div className={style.container}>
      {wilder.map((wilder) => (
        <CardWilder wilder={wilder} key={wilder.name} />
      ))}
    </div>
  );
}

export default Wilders;
