import React, { useState } from "react";
import axios from "axios";

import style from "./Form.module.css";

function Form(props) {
  const { post, setPost } = useState("");

  const submitPost = (post) => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios.post(`${REACT_APP_SERVER_ADDRESS}/post`, { post: post }).then(() => {
      alert("sucess");
    });
  };

  return (
    <div className={style.container}>
      <form onSubmit={submitPost} className={style.form}>
        <label htmlFor="name">
          Retour d'expérience:
          <input
            required
            type="text"
            value={post}
            name="name"
            placeholder="description"
            onChange={(e) => setPost(e.target.value)}
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Form;
