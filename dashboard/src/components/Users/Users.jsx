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
        fetch("http://localhost:3000/api/users")
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    rows: data.data.map((user) => ({
                        first_name: user.first_name,
                        last_name: user.last_name,
                        userProfile: user.userProfile.name,
                        country: user.country.name,
                    }))
                })
            })
    }

    //Validación para mostrar Next y Prev - PENDIENTE

    render() {
        return (
            <div className="general-container">

                <Table
                    title="Listado de Usuarios"
                    columns={["Nombre", "apellido", "País", "Perfil"]}
                    rows={this.state.rows}
                />


            </div>
        )
    }

}

export default Users;