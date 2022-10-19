import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";


const Navegador = () => {
    return (
        <nav className="d-flex justify-content-start border-bottom mb-4 py-2">
            <ul className="nav">
                <li className="nav-item">
                    <Link className="btn btn-warning fw-semibold text-light px-4" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark opacity-75" to="/catalogo">Catálogo</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark opacity-75" to="/catalogo/lacteos">Lácteos</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark opacity-75" to="/catalogo/almacen">Almacén</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark opacity-75" to="/catalogo/carnes">Carnes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark opacity-75" to="/catalogo/frutas-y-verduras">Frutas y verduras</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-dark opacity-75" to="/catalogo/congelados">Congelados</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navegador;