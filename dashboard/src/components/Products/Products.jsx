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
                this.setState({
                    rows: data.data.map((product) => ({
                        name: product.name,
                        price: product.price,
                        category: product.category.name,
                        discount: product.discount,
                    }))
                })
            })
    }

    //Validación para mostrar Next y Prev - PENDIENTE

    render() {
        return (
            <div className="general-container">

                <Table
                    title="Listado de Productos"
                    columns={["Nombre", "Precio", "Categoría", "Descuento"]}
                    rows={this.state.rows}
                />


            </div>
        )
    }

}

export default Users;