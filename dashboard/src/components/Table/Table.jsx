import React from "react";

class Lists extends React.Component {

    //Validación para mostrar Next y Prev - PENDIENTE

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <table>
                    <tbody>
                        <tr>
                            {this.props.columns.map((data, i) => {
                                return <th key={i}>{data}</th>
                            })}
                        </tr>
                        <tr>
                            {this.props.data.map((data, i) => {
                                return <td key={i}>{data.first_name} {data.last_name}</td>
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Lists;