import React from "react";

class Lists extends React.Component {

    constructor(props) {
        super(props)

        this.state= {
            endpoint: props.endpoint,
            title: props.title,
            columns: props.columns,
            info: []
        }

    }

    componentDidMount () {
        // Fetch de Número de Usuarios
        fetch('http://localhost:3000/api/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    info: data.data
                })
            })
            console.log(this.state.info);
        
    }


//Validación para mostrar Next y Prev - PENDIENTE

    render () {
        return (
            <>
            <h1>Lists</h1>
            </>
        )
    }
    
}

export default Lists;