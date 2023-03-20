import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/"className="navbar-brand">Navbar</Link>
                <form className="d-flex">
                   <Link className="nav-link" to="/">Home</Link>
                   <Link className="nav-link" to="/my-passwords">Contraseñas guardadas</Link>
                </form>
            </div>
        </nav>
    )
} 

export default Navbar