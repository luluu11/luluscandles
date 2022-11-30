import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
<div className="row">
    <div className="col-md-6">
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Lulu´s Candles</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Velas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Contacto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Quienes Somos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Cuidados</a>
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