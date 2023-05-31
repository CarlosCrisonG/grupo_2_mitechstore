import React from "react";
import SideMenu from "../SideMenu/SideMenu"
import '../Styles.css';
import './Home.css';

function Home () {
    return (
        <div className="general-container">
            <div className="title">
                <img className="icon" src="/icons/dashboard-black.png" alt="icon"></img>
                <h1>Dashboard</h1>
            </div>
        </div>
    )
}

export default Home;