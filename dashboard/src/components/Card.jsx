import React from "react";

function Card (props) {
    


    return (
        <div className="card-container">
            <div className="card">
                <div>{props.title}</div>
                <div>{props.icon}</div>
                <div>{props.count}</div>
            </div>
        </div>
    )
}

export default Card;