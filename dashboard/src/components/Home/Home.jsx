import React from "react";
import '../Styles.css';
import './Home.css';
import Card from "../Card/Card";

function Home () {

    const [cantidadUsuarios, setCantidadUsuarios] = React.useState(0)
    const [cantidadProductos, setCantidadProductos] = React.useState(0)

    React.useEffect(() => {
        // Fetch de Número de Usuarios
        fetch('http://localhost:3000/api/users')
        .then(res => res.json())
        .then((data) => {
            setCantidadUsuarios(data.meta.count)
        })

        // Fetch de Número de Productos
        fetch('http://localhost:3000/api/users')
        .then(res => res.json())
        .then((data) => {
            setCantidadUsuarios(data.meta.count)
        })
    },[])

    return (
        <div className="general-container">
            <div className="title">
                <img className="icon" src="/icons/dashboard-black.png" alt="icon"></img>
                <h1>Dashboard</h1>
            </div>
            <div className="card-row">
                {/* Card Usuarios */}
                <Card 
                    title="Usuarios" 
                    icon={<img className="icon" src="/icons/usuarios-orange.png" alt="icon"></img>} 
                    count={cantidadUsuarios} 
                />
                {/* Card Productos */}
                <Card 
                    title="Productos" 
                    icon={<img className="icon" src="/icons/productos-orange.png" alt="icon"></img>} 
                    count={cantidadUsuarios} 
                />
                {/* Card Categorías */}
                <Card 
                    title="Categorias" 
                    icon={<img className="icon" src="/icons/categorias-orange.png" alt="icon"></img>} 
                    count={cantidadUsuarios} 
                />
            </div>
        </div>
    )
}

export default Home;