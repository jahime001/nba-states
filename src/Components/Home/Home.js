import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

export default function Home() {
    return (
        <div className="home">
            <div className="video">
                <div className="overlay"></div>
                <h1>Nba Stats for the 2022 Nba Season</h1>
                <Link to='teams' className="team-check"><h1>Check Out Teams</h1></Link>


            </div>
        </div>
    )
}