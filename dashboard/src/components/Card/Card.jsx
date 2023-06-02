import React from "react";
import "./Card.css";


function Card(props) {
    let cardLong;
    if (props.long === true) {
        cardLong = { width: 'auto' };
    } else {
        cardLong = { width: '250px' };
    }


    return (
        <div className="card-container">
            <div className="card" style={cardLong}>
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