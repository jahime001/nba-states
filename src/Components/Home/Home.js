import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css'

export default function Home(props) {
    let nbaTeams = props.nbaTeams
    const [number, setNumber] = useState(0)


    return (
        <div className="home">
            <div className="video">

                <h1 className="home-title">Nba Stats for the <span className="bkp">2022</span> <span className="bss">Nba Season</span></h1>
                <Link to='teams' className="team-check"><h1>Check Out Teams</h1></Link>



            </div>
        </div>
    )
}


