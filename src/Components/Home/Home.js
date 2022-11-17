import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

export default function Home(props) {


    return (
        <div className="home">
            <div className="video">

                <h1 className="home-title">Nba Stats for the <span className="bkp">2022</span> <span className="bss">Nba Season</span></h1>
                <Link to='teams' className="team-check"><h1>Check Out Teams</h1></Link>



            </div>
        </div>
    )
}


