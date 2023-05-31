import React from "react";
import '../Styles.css';
import './Home.css';
import Card from "../Card";

function Home () {

    const [cantidadUsuarios, setCantidadUsuarios] = React.useState(0)

    React.useEffect(() => {
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
                <Card title="Titulo" icon="Icono.png" count={cantidadUsuarios} />
                <Card title="Titulo" icon="Icono.png" count="20" />
                <Card title="Titulo" icon="Icono.png" count="20" />
            </div>
        </div>
    )
}

export default Home;