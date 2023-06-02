import React from "react";
import '../Styles.css';
import Card from "../Card/Card";
import Table from "../Table/Table";

class Users extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            info: []
        }

    }

    componentDidMount () {
        // Fetch de Número de Usuarios
        fetch('http://localhost:3000/api/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({info:data.data})
            })
    }

    componentDidUpdate () {
        console.log(this.state.info);
    }


//Validación para mostrar Next y Prev - PENDIENTE

    render () {
        return (
            <div className="general-container">
            <Table 
                title= "Listado de Usuarios"
                columns= {["Nombre", "País", "Perfil"]}
                data= {this.state.info}
            />
            

            </div>
        )
    }
    
}

export default Users;