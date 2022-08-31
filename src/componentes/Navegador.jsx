import React from "react";
import logo from "./images/logo.svg"

const Navegador = () => {
    return (
        <nav className="d-flex justify-content-around align-items-center">
            <img className="logo" src={logo}  alt="logo.svg" />

            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <button type="submit" class="btn btn-primary">Buscar</button>
            </form>

            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Servicios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Productos</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navegador;