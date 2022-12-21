import React from "react";
import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
<div className="row">
    <div className="col-md-6">
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
  <Link className="navbar-brand" to={"/"}><img src={"/images/velageo.jpg"} alt={"Lulu´s Candles"} width={60} />Lulu´s Candles</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <NavLink className="nav-link" aria-current="page" to={"/category/velas"}>Velas</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to={"/category/esencias"}>Esencias</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to={"/category/sahumar"}>Sahumar</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to={"/category/accesorios"}>Accesorios</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
<div className="col-md-6 d-flex justify-content-end align-items-center">
    <CartWidget/>
</div>
</div>
    );
};

export default NavBar;