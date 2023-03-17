import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <form className="d-flex">
                   <a className="nav-link" href="#">Home</a>
                   <a className="nav-link" href="#">Contraseñas guardadas</a>
                </form>
            </div>
        </nav>
    )
} 