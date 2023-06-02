import React from "react";
import '../Styles.css';
import Card from "../Card/Card";
import Table from "../Table/Table";

class Users extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            rows: []
        }

    }

    componentDidMount() {
        fetch("http://localhost:3000/api/products")
            .then(res => res.json())
            .then((data) => {
                const rows = Object.keys(data.meta.countByCategory).map((category) => ({ name: category, cantity: data.meta.countByCategory[category] }))

                this.setState({
                    rows
                })
            })
    }

    //Validación para mostrar Next y Prev - PENDIENTE

    render() {
        return (
            <div className="general-container">

                <Table
                    title="Listado de Usuarios"
                    columns={["Nombre", "Cantidad"]}
                    rows={this.state.rows}
                />


            </div>
        )
    }

}

export default Users;