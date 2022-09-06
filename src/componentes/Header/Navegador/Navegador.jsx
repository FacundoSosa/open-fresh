import React from "react";
import "../Header/Header.css";


const Navegador = () => {
    return (
        <nav className="d-flex justify-content-start">
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active ps-0" aria-current="page" href="#">Home</a>
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