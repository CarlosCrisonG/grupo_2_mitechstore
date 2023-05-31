import React from "react";
import SideMenu from "../SideMenu/SideMenu"
import '../Styles.css';
import './Home.css';

function Home () {
    return (
        <>
        <div className="general-container">
                <div className="menu">
                    <SideMenu />
                </div>
                <div className="info">
                    <h1>Dasboard</h1>
                </div>
        </div>
        </>
    )
}

export default Home;