import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";


const Navegador = () => {
    return (
        <nav className="d-flex justify-content-start">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link active ps-0" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/catalogo">Catálogo</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/catalogo/lacteos">Lácteos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/catalogo/almacen">Almacén</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navegador;