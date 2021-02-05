import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/common/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import GoldenBook from "../view/GoldenBook";
import Home from "../view/Home";
import Profil from "../view/Profil";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profil/:id" component={Profil} />
          <Route exact path="/post" component={GoldenBook} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
