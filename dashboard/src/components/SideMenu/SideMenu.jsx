import React from "react";
import "./SideMenu.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="sidepanel">
                <img className="logo" src="/images/Logo_Blanco.png" alt="Mi Tech Store"></img>
                <Link className="link-button" to="/"><button className="menu-button">
                    <img className="icon" src="/icons/dashboard-white.png" alt="icon"></img>
                    Dashboard
                </button></Link>
                <hr></hr>
                <Link className="link-button" to="/users"><button className="menu-button">
                    <img className="icon" src="/icons/usuarios-white.png" alt="icon"></img>
                    Usuarios
                </button></Link>
                <Link className="link-button" to="/products"><button className="menu-button">
                    <img className="icon" src="/icons/productos-white.png" alt="icon"></img>
                    Productos
                </button></Link>
                <Link className="link-button" to="/categories"><button className="menu-button">
                    <img className="icon" src="/icons/categorias-white.png" alt="icon"></img>
                    Categorías
                </button></Link>

            </div >
        </>
    )
}

export default Home;