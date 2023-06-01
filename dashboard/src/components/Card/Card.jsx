import React from "react";
import "./Card.css";

function Card (props) {
    


    return (
        <div className="card-container">
            <div className="card">
                <div className="card-header">
                    <div className="card-title">{props.title}</div>
                    <div className="card-icon">{props.icon}</div>
                </div>
                <div className="card-count">{props.count}</div>
            </div>
        </div>
    )
}

export default Card;